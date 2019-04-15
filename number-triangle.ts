import TriangleNumbers from "./triangle-numbers";

class NumberTriangle {
    private numberArray : number[];
    private __numRows : number | undefined;

    constructor (numberArrayIn: number[]) {
        this.numberArray = numberArrayIn;
        this.__numRows = undefined;
    }

    toString () {
        return this.numberArray.toString();
    }

    get( rowIndex: number, horizontalIndex: number): number | undefined {
        if (rowIndex === 0) {
            return this.numberArray[0];
        } else {
            let arrayIndex = TriangleNumbers.getArrayIndexByRowAndHorizontal(rowIndex, horizontalIndex);
            return arrayIndex < this.numberArray.length ? this.numberArray[arrayIndex] : undefined
        } 
    }

    get numRows () {
        if (this.__numRows)
            return this.__numRows;
        else {
            this.__numRows = TriangleNumbers.getRowIndexByIndex(this.numberArray.length - 1) + 1;
            return this.__numRows;
        }
    }

    sumTriangleUpOneLevel (): NumberTriangle | null {
        let numRows = this.numRows;
        let lastRowIndex = numRows - 1;
        if (lastRowIndex == 0) {
            return null;
        } else {
            let rowIndexOneBeforeLast = lastRowIndex - 1;
            // console.log("rowIndexOneBeforeLast: " + rowIndexOneBeforeLast);
            let newTriangleLength;
            if (rowIndexOneBeforeLast == 0) {
                newTriangleLength = 1;
            } else {
                newTriangleLength = TriangleNumbers.getTriangleNumberByIndex(rowIndexOneBeforeLast - 1);
            }
            let newTriangleArray = [];
            for (let i = 0; i < newTriangleLength; i++) {
                newTriangleArray[i] = this.numberArray[i];
            }

            let width = TriangleNumbers.getTriangleWidthByRow(rowIndexOneBeforeLast);
            let initIndexSecondToLastRow = TriangleNumbers.getArrayIndexByRowAndHorizontal(rowIndexOneBeforeLast, 0);
            for (let i = 0; i < width; i++) {
                let arrayIndex = initIndexSecondToLastRow + i;
                // console.log("currentIndex: " + arrayIndex);
                let childrenIndexes = TriangleNumbers.getChildrenByIndex(initIndexSecondToLastRow + i);
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
export default NumberTriangle;