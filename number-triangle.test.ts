import NumberTriangle from "./number-triangle";

describe("the number triangle class", function () {
    test("number triangle constructor", function () {
        expect(function () {
            new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56, 22, 1, 8, 9, 32]);
        }).not.toThrow();
    });
    test("get function works on valid input", function () {
        const triangle = new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56, 22, 1, 8, 9, 32]);
        expect(triangle.get(0, 0)).toBe(4);
        expect(triangle.get(1, 0)).toBe(15);
        expect(triangle.get(1, 1)).toBe(12);
        expect(triangle.get(3, 2)).toBe(13);

        expect(function () {
            triangle.get(3, 4);
        }).toThrow();
        expect(function () {
            triangle.get(3, 4);
        }).toThrow();
    });

    test("get function throws on invalid input", function () {
        const triangle = new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56]);
        expect(function () {
            triangle.get(3, 4);
        }).toThrow();

        expect(function () {
            triangle.get(4, 0);
        }).toThrow();
    });

    test("numRows works on nonempty triangle", function () {
        const triangle = new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56, 22, 1, 8, 9, 32]);
        expect(triangle.numRows && triangle.numRows).toBe(5);
    });

    test("numRows works on empty triangle", function () {
        const triangle = new NumberTriangle([]);
        expect(triangle.numRows && triangle.numRows).toBe(0);
    });

    test("maxSumFromChildUp works on valid input", function () {
        const triangle = new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56, 22, 1, 8, 9, 32]);
        expect(triangle.maxSumFromChildUp(0, 0)).toBe(19);
        expect(triangle.maxSumFromChildUp(1, 1)).toBe(67);
    });
    test("maxSumFromChildUp throws on invalid input", function () {
        const triangle = new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56]);
        expect(function () {
            triangle.maxSumFromChildUp(3, 3);
        }).toThrow();
    });
    // maxSumFromBottomRowUp
    test("maxSumFromBottomRowUp", function () {
        const triangle = new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56]);
        const newTriangle = triangle.maxSumFromBottomRowUp();
        const expectedResult = new NumberTriangle([ 4, 15, 12, 15, 68, 62 ]);
        expect(newTriangle.equals(expectedResult)).toBe(true);        
    });
    test("maxSumFromBottomRowUp 2", function () {
        const triangle = new NumberTriangle([ 4, 15, 12, 15, 68, 62]);
        const newTriangle = triangle.maxSumFromBottomRowUp();
        const expectedResult = new NumberTriangle([ 4, 83, 80]);
        expect(newTriangle.equals(expectedResult)).toBe(true);        
    });
    test("maxSumFromBottomRowUp 3", function () {
        const triangle = new NumberTriangle([ 4, 83, 80]);
        const newTriangle = triangle.maxSumFromBottomRowUp();
        const expectedResult = new NumberTriangle([87]);
        expect(newTriangle.equals(expectedResult)).toBe(true);        
    });
    test("maxSumFromBottomRowUp 5", function () {
        const triangle = new NumberTriangle([ 87]);
        const newTriangle = triangle.maxSumFromBottomRowUp();
        const expectedResult = new NumberTriangle([]);
        expect(newTriangle.equals(expectedResult)).toBe(true);        
    });
    test("maxSumFromBottomRowUp 6", function () {
        const triangle = new NumberTriangle([]);
        const newTriangle = triangle.maxSumFromBottomRowUp();
        const expectedResult = new NumberTriangle([]);
        expect(newTriangle.equals(expectedResult)).toBe(true);        
    });
});
