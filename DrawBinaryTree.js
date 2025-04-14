import {
  connectEdges,
  DEFAULT_CONFIG,
  drawNode,
  getRequiredHeightAndWidth,
  treeConstructor,
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

  if (root.left !== null) {
    const leftXStart = xStart;
    const leftXEnd = xPosition;
    recursivelyDrawNode(root.left, canvasElement, currentLevel + 1, {
      xStart: leftXStart,
      xEnd: leftXEnd,
    });

    connectEdges(
      canvasElement,
      { xStart: xPosition, xEnd: (xStart + xPosition) / 2 },
      {
        yStart: yPosition + DEFAULT_CONFIG.radius,
        yEnd:
          (currentLevel + 1) * DEFAULT_CONFIG.nodeHeightSpacing -
          DEFAULT_CONFIG.radius,
      }
    );
  }

  if (root.right !== null) {
    const rightXStart = xPosition;
    const rightXEnd = xEnd;
    recursivelyDrawNode(root.right, canvasElement, currentLevel + 1, {
      xStart: rightXStart,
      xEnd: rightXEnd,
    });

    connectEdges(
      canvasElement,
      { xStart: xPosition, xEnd: (xPosition + xEnd) / 2 },
      {
        yStart: yPosition + DEFAULT_CONFIG.radius,
        yEnd:
          (currentLevel + 1) * DEFAULT_CONFIG.nodeHeightSpacing -
          DEFAULT_CONFIG.radius,
      }
    );
  }
}

// const root = new BinaryTreeNode(1);
// const leftChild = new BinaryTreeNode(2);
// root.setLeft(leftChild);
// const rightChild = new BinaryTreeNode(3);
// root.setRight(rightChild);
// const leftChildLeft = new BinaryTreeNode(4);
// leftChild.setLeft(leftChildLeft);
// const leftChildRight = new BinaryTreeNode(5);
// leftChild.setRight(leftChildRight);

let previousValue = "";
function init(value) {
  previousValue = value;
  clearCanvas();
  const root = treeConstructor(value);
  drawBinaryTree(root, canvas);
}

const submitBtn = document.querySelector(".submitBtn");
const clearBtn = document.querySelector(".clearBtn");
const textarea = document.querySelector("textarea");

submitBtn.addEventListener("click", () => {
  if (textarea.value === " ") {
    alert("Please enter a valid tree string");
    return;
  }
  init(textarea.value);
});
// console.log(root);
// drawBinaryTree(root, canvas);

function clearCanvas() {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

clearBtn.addEventListener("click", () => {
  textarea.value = " ";
  clearCanvas();
});

window.addEventListener("resize", () => init(previousValue));
