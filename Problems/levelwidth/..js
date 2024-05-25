// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const widthArr = [0];
    const arr = [root, 'LevelEnd'];
    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 'LevelEnd') {
            widthArr.push(0);
            arr.push(node);
        } else {
            widthArr[widthArr.length - 1]++;
            arr.push(...node.children);
        }
    }
    return widthArr;
}

module.exports = levelWidth;
