/**
 * InteractiveCanvasEditor.js
 * Proxy wrapper & extension of VisualFlowNodeComponent
 * Provides backward compatibility and full feature support for 4-Wing Direction Handles visual studio.
 */

import { VisualFlowNodeComponent } from './VisualFlowNodeComponent.js';

export class InteractiveCanvasEditor extends VisualFlowNodeComponent {
  constructor(options = {}) {
    super(options);
  }
}

export { VisualFlowNodeComponent };
