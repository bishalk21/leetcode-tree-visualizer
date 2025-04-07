export const DEFAULT_CONFIG = {
  radius: 20,
  nodeWidthSpacing: 25,
  nodeHeightSpacing: 100,
  fontSize: 16,
};

export function getRequiredHeightAndWidth(root) {
  const heightOfTree = root.getHeight();

  const requiredCanvasHeight = heightOfTree * DEFAULT_CONFIG.nodeHeightSpacing;
  const requiredCanvasWidth =
    Math.pow(2, heightOfTree) * DEFAULT_CONFIG.nodeWidthSpacing;

  return {
    requiredCanvasHeight,
    requiredCanvasWidth,
  };
}
