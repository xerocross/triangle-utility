"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TriangleNumbers = {
    // get a list of sorted triangle numbers up to and
    // including max
    generateTriangleNumbersUpTo(max) {
        const triangleNumbers = [];
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
    },
    // by fiat, 1 is the first triangle number
    // at index 0
    getTriangleNumberByIndex(index) {
        let triangleNum = 1;
        for (let i = 1; i <= index; i++) {
            triangleNum = triangleNum + (i + 1);
        }
        return triangleNum;
    },
    // getTriangleWidthByRow (rowIndex: number): number {
    //     return rowIndex + 1;
    // },
    // getChildrenByIndex (index: number) {
    //     const rowIndex = this.getRowIndexByIndex(index);
    //     const shift = rowIndex + 1;
    //     return {
    //         leftChildIndex : index + shift,
    //         rightChildIndex : index + shift + 1
    //     };
    // },
    getIndexByTriangleNumber(triangleNum) {
        let index = 0;
        let testNum = triangleNum;
        while (testNum >= 0) {
            testNum = testNum - (index + 1);
            index++;
        }
        return index - 2;
    }
};
exports.default = TriangleNumbers;
