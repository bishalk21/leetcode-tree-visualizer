# LeetCode Tree DSA Visualizers using HTML, CSS, and JavaScript

## learnings

> math - calculation of coordinates of nodes in a binary tree
> DSA - binary tree, binary search tree, AVL tree, red-black tree, B-tree

2^h - number of nodes in a binary tree
2^(h+1) - 1 - number of nodes in a complete binary tree

[1, 2, 3, 4, 5, 6, 7] - array representation of a complete binary tree

                     1
                    / \
                    2   3
                    / \ / \
                    4  5 6  7

- NULL means no child or skip position

## Requirements

> Drawing a binary tree - in 2D graphical representation in Canvas
> tree - set of nodes (properties) and edges (connections)
> node - set of properties (value, left, right)
> edge - set of properties (parent, child)

### bezier curve - a smooth curve that connects two points

> control points - points that define the shape of the curve
> start point - the first point of the curve
> end point - the last point of the curve

### de casteljau's algorithm - a recursive algorithm for drawing bezier curves

> 1. start with a set of control points
> 2. for each pair of control points, calculate the midpoint
> 3. repeat until there is only one point left
> 4. the last point is the point on the curve
> 5. draw a line from the start point to the last point
> 6. repeat for each pair of control points until the end point is reached
