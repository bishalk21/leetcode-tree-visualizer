export class BinaryTreeNode {
  value = null;
  left = null;
  right = null;

  // Constructor to initialize the node with a value
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // setters to set the left and right children
  setLeft(node) {
    this.left = node;
  }

  setRight(node) {
    this.right = node;
  }

  // height method to calculate the height of the tree
  getHeight() {
    const leftHeight = this.left?.getHeight() || 0;
    // Use optional chaining to avoid errors if left is null
    const rightHeight = this.right?.getHeight() || 0;
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
