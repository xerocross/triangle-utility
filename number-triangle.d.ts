declare class NumberTriangle {
    private numberArray;
    private __numRows;
    constructor(numberArrayIn: number[]);
    toString(): string;
    get(rowIndex: number, horizontalIndex: number): number | undefined;
    readonly numRows: number;
    sumTriangleUpOneLevel(): NumberTriangle | null;
}
export default NumberTriangle;
