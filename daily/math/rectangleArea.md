# [223. Rectangle Area](https://leetcode.com/problems/rectangle-area/description/)

Situations
1. non-overlap && align: A + B - (A & B = 0)
2. overlap: A + B - A & B
3. within: A + B - (A & B = A || B)

Concept: Get A & B depends on situation using boundary.

## Solution
```js
const computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    // Boundary
    let left = Math.max(ax1, bx1);
    let right = Math.min(ax2, bx2);

    let top = Math.min(ay2, by2);
    let bottom = Math.max(ay1, by1);

    let A = (ax2 - ax1) * (ay2 - ay1);
    let B = (bx2 - bx1) * (by2 - by1);
    let intersection = 0; // default for non-overlap

    // While A & B overlap or A/B within A/B
    // x axios: ax1 < (bx1 || bx2) < ax2 || bx1 < (ax1 || ax2) < bx2
    // y axios: ay1 < (by1 || by2) < ay2 || by1 < (ay1 || ay2) < by2
    if ((left < right) && (bottom < top)) {
        // A & B or A || B
        intersection = (right - left) * (top - bottom)
    }

    return A + B - intersection;
};
```
