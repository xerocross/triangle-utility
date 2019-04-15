"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const triangle_numbers_1 = __importDefault(require("./triangle-numbers"));
class NumberTriangle {
    constructor(numberArrayIn) {
        this.numberArray = numberArrayIn;
        this.__numRows = undefined;
    }
    toString() {
        return this.numberArray.toString();
    }
    get(rowIndex, horizontalIndex) {
        if (rowIndex === 0) {
            return this.numberArray[0];
        }
        else {
            let arrayIndex = triangle_numbers_1.default.getArrayIndexByRowAndHorizontal(rowIndex, horizontalIndex);
            return arrayIndex < this.numberArray.length ? this.numberArray[arrayIndex] : undefined;
        }
    }
    get numRows() {
        if (this.__numRows)
            return this.__numRows;
        else {
            this.__numRows = triangle_numbers_1.default.getRowIndexByIndex(this.numberArray.length - 1) + 1;
            return this.__numRows;
        }
    }
    sumTriangleUpOneLevel() {
        let numRows = this.numRows;
        let lastRowIndex = numRows - 1;
        if (lastRowIndex == 0) {
            return null;
        }
        else {
            let rowIndexOneBeforeLast = lastRowIndex - 1;
            // console.log("rowIndexOneBeforeLast: " + rowIndexOneBeforeLast);
            let newTriangleLength;
            if (rowIndexOneBeforeLast == 0) {
                newTriangleLength = 1;
            }
            else {
                newTriangleLength = triangle_numbers_1.default.getTriangleNumberByIndex(rowIndexOneBeforeLast - 1);
            }
            let newTriangleArray = [];
            for (let i = 0; i < newTriangleLength; i++) {
                newTriangleArray[i] = this.numberArray[i];
            }
            let width = triangle_numbers_1.default.getTriangleWidthByRow(rowIndexOneBeforeLast);
            let initIndexSecondToLastRow = triangle_numbers_1.default.getArrayIndexByRowAndHorizontal(rowIndexOneBeforeLast, 0);
            for (let i = 0; i < width; i++) {
                let arrayIndex = initIndexSecondToLastRow + i;
                // console.log("currentIndex: " + arrayIndex);
                let childrenIndexes = triangle_numbers_1.default.getChildrenByIndex(initIndexSecondToLastRow + i);
                let val = this.numberArray[initIndexSecondToLastRow + i];
                // console.log("existing value: " + val);
                // console.log(childrenIndexes);
                let leftChildVal = this.numberArray[childrenIndexes.leftChildIndex];
                let rightChildVal = this.numberArray[childrenIndexes.rightChildIndex];
                // console.log("leftChildVal: " + leftChildVal);
                // console.log("rightChildVal: " + rightChildVal);
                let newVal = Math.max(val + leftChildVal, val + rightChildVal);
                newTriangleArray[initIndexSecondToLastRow + i] = newVal;
                // console.log("newVal: " + newVal);
            }
            return new NumberTriangle(newTriangleArray);
        }
    }
}
exports.default = NumberTriangle;
