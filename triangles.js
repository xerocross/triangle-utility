"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangles {
    constructor() {
    }
    generateTriangleNumbers(max) {
        let triangleNumbers = [];
        let triangleNum = 0;
        let index = 1;
        while (triangleNum <= max) {
            triangleNum = triangleNum + index;
            triangleNumbers.push(triangleNum);
            index++;
        }
        if (triangleNum > max) {
            triangleNumbers.pop();
        }
        return triangleNumbers;
    }
}
exports.default = Triangles;
