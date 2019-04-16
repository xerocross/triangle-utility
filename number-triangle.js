"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const triangle_numbers_1 = __importDefault(require("./triangle-numbers"));
class NumberTriangle {
    static getTriangleWidthByRow(rowIndex) {
        return rowIndex + 1;
    }
    static rowByVertToIndex(row, vert) {
        if (!(typeof row === "number" && row >= 0)) {
            throw new Error(`invalid row index: ${row}`);
        }
        const maxVert = NumberTriangle.getTriangleWidthByRow(row) - 1;
        if (vert > maxVert) {
            throw new Error(`invalid vert index: (${row}, ${vert})`);
        }
        if (row === 0) {
            return 0;
        }
        const triangleNumber = triangle_numbers_1.default.getTriangleNumberByIndex(row - 1);
        return triangleNumber + vert;
    }
    static getChildrenIndexes(row, vert) {
        const overallIndex = NumberTriangle.rowByVertToIndex(row, vert);
        return {
            left: { row: row + 1, vert: vert },
            right: { row: row + 1, vert: vert + 1 }
        };
    }
    // map overall array index to row index
    static getRowByIndex(arrayIndex) {
        let count = 1;
        let testNum = arrayIndex;
        while (testNum >= 0) {
            testNum = testNum - count;
            count++;
        }
        const rowIndex = count - 2;
        // we incremented count exactly 1 too many times
        // then we translate a count into an index
        return rowIndex;
    }
    constructor(numberArrayIn) {
        this.numberArray = numberArrayIn;
        this.__numRows = undefined;
    }
    toString() {
        return this.numberArray.toString();
    }
    get size() {
        return this.numberArray.length;
    }
    equals(other) {
        if (this.size !== other.size) {
            return false;
        }
        else {
            const size = this.size;
            for (let i = 0; i < size; i++) {
                if (this.numberArray[i] !== other.numberArray[i]) {
                    return false;
                }
            }
            return true;
        }
    }
    get(rowIndex, vertIndex) {
        const arrayIndex = NumberTriangle.rowByVertToIndex(rowIndex, vertIndex);
        if (arrayIndex >= this.numberArray.length) {
            throw Error(`coordinates out of bounds : " + (${rowIndex}, ${vertIndex})`);
        }
        return this.numberArray[arrayIndex];
    }
    get numRows() {
        if (this.__numRows) {
            return this.__numRows;
        }
        else {
            this.__numRows = NumberTriangle.getRowByIndex(this.numberArray.length - 1) + 1;
            return this.__numRows;
        }
    }
    maxSumFromChildUp(row, vert) {
        const childIndex = NumberTriangle.getChildrenIndexes(row, vert);
        const val = this.get(row, vert);
        const lVal = this.get(childIndex.left.row, childIndex.left.vert);
        const rVal = this.get(childIndex.right.row, childIndex.right.vert);
        return Math.max(val + lVal, val + rVal);
    }
    maxSumFromBottomRowUp() {
        const numRows = this.numRows;
        const lastRowIndex = numRows - 1;
        if (lastRowIndex <= 0) {
            return new NumberTriangle([]);
        }
        else {
            const rowIndexOneBeforeLast = lastRowIndex - 1;
            const width = NumberTriangle.getTriangleWidthByRow(rowIndexOneBeforeLast);
            let newTriangleLength;
            if (rowIndexOneBeforeLast === 0) {
                newTriangleLength = 1;
            }
            else {
                newTriangleLength = triangle_numbers_1.default.getTriangleNumberByIndex(rowIndexOneBeforeLast - 1);
            }
            const newTriangleArray = [];
            // copy existing triangle data up to new triangle length
            for (let i = 0; i < newTriangleLength; i++) {
                newTriangleArray[i] = this.numberArray[i];
            }
            for (let i = 0; i < width; i++) {
                const newVal = this.maxSumFromChildUp(rowIndexOneBeforeLast, i);
                newTriangleArray[NumberTriangle.rowByVertToIndex(rowIndexOneBeforeLast, i)] = newVal;
            }
            return new NumberTriangle(newTriangleArray);
        }
    }
}
exports.default = NumberTriangle;
