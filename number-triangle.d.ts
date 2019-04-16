declare class NumberTriangle {
    static getTriangleWidthByRow(rowIndex: number): number;
    static rowByVertToIndex(row: number, vert: number): number;
    static getChildrenIndexes(row: number, vert: number): {
        left: {
            row: number;
            vert: number;
        };
        right: {
            row: number;
            vert: number;
        };
    };
    static getRowByIndex(arrayIndex: number): number;
    protected numberArray: number[];
    private __numRows;
    constructor(numberArrayIn: number[]);
    toString(): string;
    readonly size: number;
    equals(other: NumberTriangle): boolean;
    get(rowIndex: number, vertIndex: number): number;
    readonly numRows: number;
    maxSumFromChildUp(row: number, vert: number): number;
    maxSumFromBottomRowUp(): NumberTriangle;
}
export default NumberTriangle;
