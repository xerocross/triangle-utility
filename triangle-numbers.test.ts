import TriangleNumbers from "./triangle-numbers";

test("generate triangle numbers", function () {
    expect(TriangleNumbers.generateTriangleNumbersUpTo(1).pop()).toBe(1);
    expect(TriangleNumbers.generateTriangleNumbersUpTo(2).pop()).toBe(1);
    expect(TriangleNumbers.generateTriangleNumbersUpTo(3).pop()).toBe(3);
    expect(TriangleNumbers.generateTriangleNumbersUpTo(6).pop()).toBe(6);
    expect(TriangleNumbers.generateTriangleNumbersUpTo(7).pop()).toBe(6);
    expect(TriangleNumbers.generateTriangleNumbersUpTo(8).pop()).toBe(6);
    expect(TriangleNumbers.generateTriangleNumbersUpTo(9).pop()).toBe(6);
    expect(TriangleNumbers.generateTriangleNumbersUpTo(10).pop()).toBe(10);
});
test("getTriangleNumberByIndex", function () {
    expect(TriangleNumbers.getTriangleNumberByIndex(0)).toBe(1);
    expect(TriangleNumbers.getTriangleNumberByIndex(1)).toBe(3);
    expect(TriangleNumbers.getTriangleNumberByIndex(2)).toBe(6);
    expect(TriangleNumbers.getTriangleNumberByIndex(3)).toBe(10);
    expect(TriangleNumbers.getTriangleNumberByIndex(4)).toBe(15);
});
