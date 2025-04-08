import { BinaryTreeNode } from "./BinaryTreeNode.js";
import {
  DEFAULT_CONFIG,
  drawNode,
  getRequiredHeightAndWidth,
} from "./treeUtils.js";

const canvas = document.querySelector("canvas");

function drawBinaryTree(root, canvasElement) {
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  // initialize the canvas context
  canvasElement.width = maxWidth;
  canvasElement.height = maxHeight;

  // get the required  height and width of the the node in canvas
  const { requiredCanvasHeight, requiredCanvasWidth } =
    getRequiredHeightAndWidth(root);

  const windowWidthCenter = maxWidth / 2;
  const requiredCanvasWidthCenter = requiredCanvasWidth / 2;

  const xStart = windowWidthCenter - requiredCanvasWidthCenter;
  const xEnd = windowWidthCenter + requiredCanvasWidthCenter;

  const horizontalConfig = {
    xStart,
    xEnd,
  };

  recursivelyDrawNode(root, canvasElement, 0.5, horizontalConfig); // start drawing from level 0
}

// function to draw the binary tree
// find root note coordinates
// draw the root circle
// recursively call the function for left and right child
// connect edges of root with left and right child
function recursivelyDrawNode(
  root,
  canvasElement,
  currentLevel,
  horizontalConfig
) {
  const { xStart, xEnd } = horizontalConfig;

  const xPosition = (xStart + xEnd) / 2;
  const yPosition = currentLevel * DEFAULT_CONFIG.nodeHeightSpacing;

  drawNode(root.value, canvasElement, xPosition, yPosition);
}

const root = new BinaryTreeNode(1);

console.log(root);
drawBinaryTree(root, canvas);
