declare var TriangleNumbers: {
    generateTriangleNumbersUpTo(max: number): number[];
    getTriangleNumberByIndex(index: number): number;
    getTriangleWidthByRow(rowIndex: number): number;
    getArrayIndexByRowAndHorizontal(rowIndex: number, horizontal: number): number;
    getChildrenByIndex(index: number): {
        leftChildIndex: number;
        rightChildIndex: number;
    };
    getParentByChildIndex(index: number): void;
    getRowIndexByIndex(arrayIndex: number): number;
    getIndexByTriangleNumber(triangleNum: number): number;
};
export default TriangleNumbers;
