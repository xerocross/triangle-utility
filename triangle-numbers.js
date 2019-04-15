"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TriangleNumbers = {
    generateTriangleNumbersUpTo(max) {
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
    },
    getTriangleNumberByIndex(index) {
        let triangleNum = 1;
        for (let i = 1; i <= index; i++) {
            triangleNum = triangleNum + (i + 1);
        }
        return triangleNum;
    },
    getTriangleWidthByRow(rowIndex) {
        return rowIndex + 1;
    },
    getArrayIndexByRowAndHorizontal(rowIndex, horizontal) {
        if (rowIndex == 0) {
            return 0;
        }
        let triangleNumber = this.getTriangleNumberByIndex(rowIndex - 1);
        return triangleNumber + horizontal;
    },
    getChildrenByIndex(index) {
        console.log("getChildrenByIndex");
        let rowIndex = this.getRowIndexByIndex(index);
        let shift = rowIndex + 1;
        return {
            leftChildIndex: index + shift,
            rightChildIndex: index + shift + 1
        };
    },
    getParentByChildIndex(index) {
        let triangleNum = this.generateTriangleNumbersUpTo(index);
    },
    getRowIndexByIndex(arrayIndex) {
        let count = 1;
        let testNum = arrayIndex;
        while (testNum >= 0) {
            testNum = testNum - count;
            count++;
        }
        let rowIndex = count - 2;
        // we incremented count exactly 1 too many times
        // then we translate a count into an index
        return rowIndex;
    },
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
