"use strict"

class Triangles {
    constructor() {
    }
    generateTriangleNumbers (max: number) {
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
export default Triangles;