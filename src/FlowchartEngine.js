/**
 * FlowchartEngine.js - Multi-Branch Flowchart Execution & Navigation Engine
 */

export class FlowchartEngine {
  constructor(flowData) {
    this.flowData = flowData || null;
    this.currentNodeId = null;
    this.historyStack = [];
  }

  setFlowchart(flowData) {
    this.flowData = flowData;
    this.currentNodeId = flowData ? flowData.startNodeId || 'start' : null;
    this.historyStack = [];
  }

  getCurrentNode() {
    if (!this.flowData || !this.currentNodeId) return null;
    return this.flowData.nodes[this.currentNodeId] || null;
  }

  selectOption(nextNodeId) {
    if (!this.flowData || !this.flowData.nodes[nextNodeId]) return false;
    this.historyStack.push(this.currentNodeId);
    this.currentNodeId = nextNodeId;
    return true;
  }

  goBack() {
    if (this.historyStack.length === 0) return false;
    this.currentNodeId = this.historyStack.pop();
    return true;
  }

  restart() {
    if (this.flowData) {
      this.currentNodeId = this.flowData.startNodeId || 'start';
      this.historyStack = [];
    }
  }

  getBranchingPaths(nodeId) {
    const node = this.flowData?.nodes[nodeId || this.currentNodeId];
    if (!node || !node.options) return [];
    return node.options.map(opt => ({
      label: opt.text,
      targetId: opt.nextNodeId,
      targetNode: this.flowData.nodes[opt.nextNodeId] || null
    }));
  }

  addBranchOption(nodeId, optionText, targetNodeId) {
    const node = this.flowData?.nodes[nodeId];
    if (!node) return false;
    if (!node.options) node.options = [];
    node.options.push({ text: optionText, nextNodeId: targetNodeId });
    return true;
  }
}
