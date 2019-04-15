var TriangleNumbers = {
    generateTriangleNumbersUpTo (max: number) : number[] {
        let triangleNumbers: number[] = [];
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

    getTriangleNumberByIndex (index : number): number {
        let triangleNum = 1;
        for (let i = 1; i <= index; i++) {
            triangleNum = triangleNum + (i + 1);
        }
        return triangleNum;
    },

    getTriangleWidthByRow (rowIndex: number): number {
        return rowIndex + 1;
    },

    getArrayIndexByRowAndHorizontal (rowIndex : number, horizontal: number) {
        if (rowIndex == 0) {
            return 0;
        }
        let triangleNumber = this.getTriangleNumberByIndex(rowIndex - 1);
        return triangleNumber + horizontal;
    },

    getChildrenByIndex (index: number) {
        console.log("getChildrenByIndex");
        let rowIndex = this.getRowIndexByIndex(index);
        let shift = rowIndex + 1;
        return {
            leftChildIndex : index + shift,
            rightChildIndex : index + shift + 1
        }
    },

    getParentByChildIndex (index: number) {
        let triangleNum = this.generateTriangleNumbersUpTo(index);

    },
    getRowIndexByIndex (arrayIndex: number) {
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
    getIndexByTriangleNumber(triangleNum: number) {
        let index = 0;
        let testNum = triangleNum;
        while (testNum >= 0) {
            testNum = testNum - (index + 1);
            index++;
        }
        return index - 2;
    }
}
export default TriangleNumbers;