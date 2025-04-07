import { BinaryTreeNode } from "./BinaryTreeNode.js";
import { getRequiredHeightAndWidth } from "./treeUtils.js";

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

  const windowWidthCenter = Math.floor(maxWidth / 2);
  const requiredCanvasWidthCenter = Math.floor(requiredCanvasWidth / 2);

  const xStart = windowWidthCenter - requiredCanvasWidthCenter;
  const xEnd = windowWidthCenter + requiredCanvasWidthCenter;

  const horizontalConfig = {
    xStart,
    xEnd,
  };
}

const root = new BinaryTreeNode(1);

console.log(root);
drawBinaryTree(root, canvas);
