import NumberTriangle from "./number-triangle";

test("number triangle constructor", function() {
    let triangle = new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56, 22, 1, 8, 9, 32]);
    expect(triangle.get(3, 2)).toBe(13);  
});

test("numRows", function() {
    let triangle = new NumberTriangle([4, 15, 12, 3, 55, 6, 12, 9, 13, 56, 22, 1, 8, 9, 32]);
    expect(triangle.numRows && triangle.numRows).toBe(5);
});