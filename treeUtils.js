export const DEFAULT_CONFIG = {
  radius: 20,
  nodeWidthSpacing: 25,
  nodeHeightSpacing: 100,
  fontSize: 15,
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

export function drawNode(value, canvasElement, x, y) {
  const context = canvasElement.getContext("2d");

  // Draw the circle
  context.beginPath();
  context.arc(x, y, DEFAULT_CONFIG.radius, 0, Math.PI * 2);
  context.fillStyle = "lightblue";
  context.fill();

  // draw circle border
  context.arc(x, y, DEFAULT_CONFIG.radius, 0, Math.PI * 2);
  context.strokeStyle = "black";
  context.stroke();

  // Draw the text
  context.font = `${DEFAULT_CONFIG.fontSize}px Arial`;
  context.fillStyle = "black";
  context.textAlign = "center";
  //   context.textBaseline = "middle";
  //   context.fillText(value, x, y);
  context.fillText(value, x, y + DEFAULT_CONFIG.fontSize / 2); // Adjust y position for better centering
}

export function connectEdges(canvasElement, xCoordinates, yCoordinates) {
  const { xStart, xEnd } = xCoordinates;
  const { yStart, yEnd } = yCoordinates;

  const start = {
    x: xStart,
    y: yStart,
  };

  const controlPoint1 = {
    x: (xStart + xEnd) / 2,
    y: (yStart + yEnd) / 2,
  };
  const controlPoint2 = {
    x: xEnd,
    y: (yStart + yEnd) / 2,
  };

  const end = {
    x: xEnd,
    y: yEnd,
  };

  const context = canvasElement.getContext("2d");
  context.beginPath();
  context.moveTo(start.x, start.y);
  // context.lineTo(end.x, end.y);
  context.bezierCurveTo(
    controlPoint1.x,
    controlPoint1.y,
    controlPoint2.x,
    controlPoint2.y,
    end.x,
    end.y
  );
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.stroke();
  context.closePath();
}
