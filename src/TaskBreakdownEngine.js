/**
 * TaskBreakdownEngine.js - Google Tasks Style Point-by-Point Subtask Manager
 * Designed to reduce cognitive load through discrete +1 step-by-step item breakdown.
 */

export class TaskBreakdownEngine {
  constructor() {
    this.storageKey = 'terra_flow_subtasks_v2';
  }

  getTasksForNode(flowId, nodeId) {
    const key = `${flowId}_${nodeId}`;
    const all = this._getAll();
    return all[key] || [];
  }

  addTask(flowId, nodeId, text) {
    if (!text || !text.trim()) return null;
    const key = `${flowId}_${nodeId}`;
    const all = this._getAll();
    if (!all[key]) all[key] = [];

    const newTask = {
      id: 'task_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      text: text.trim(),
      done: false,
      createdAt: new Date().toISOString()
    };

    all[key].push(newTask);
    this._saveAll(all);
    return newTask;
  }

  toggleTask(flowId, nodeId, taskId) {
    const key = `${flowId}_${nodeId}`;
    const all = this._getAll();
    if (!all[key]) return false;

    const task = all[key].find(t => t.id === taskId);
    if (task) {
      task.done = !task.done;
      this._saveAll(all);
      return task.done;
    }
    return false;
  }

  deleteTask(flowId, nodeId, taskId) {
    const key = `${flowId}_${nodeId}`;
    const all = this._getAll();
    if (!all[key]) return false;

    all[key] = all[key].filter(t => t.id !== taskId);
    this._saveAll(all);
    return true;
  }

  getCognitiveLoadScore(flowId, nodeId) {
    const tasks = this.getTasksForNode(flowId, nodeId);
    if (tasks.length === 0) return { score: 100, label: 'Jernih / Bebeb Beban', level: 'zen' };
    
    const completed = tasks.filter(t => t.done).length;
    const pending = tasks.length - completed;
    
    if (pending === 0) return { score: 100, label: 'Selesai Tuntas! (Fokus Maksimal)', level: 'zen' };
    if (pending <= 2) return { score: 85, label: 'Ringan & Jelas (+1 Langkah)', level: 'light' };
    if (pending <= 4) return { score: 60, label: 'Sedang (Kerjakan 1 per 1)', level: 'medium' };
    return { score: 35, label: 'Tinggi (Bagi lagi jadi subtaskkecil)', level: 'heavy' };
  }

  _getAll() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  _saveAll(data) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to persist task data:', e);
    }
  }
}
