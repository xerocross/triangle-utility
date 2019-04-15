import TriangleNumbers from "./triangle-numbers.js";

describe("General:",function() {
    test("we can generate a simple list of triangle numbers", function() {
        // for (let i = 1; i < 50; i++) {
        //     console.log(i + " : " + x.generateTriangleNumbersUpTo(i));
        // }
        expect(TriangleNumbers.generateTriangleNumbersUpTo(21).pop()).toBe(21);
    });

    test("we can get triangle numbers by index", function() {
        // for (let i = 0; i < 10; i++) {
        //     console.log(i + " : " + TriangleNumbers.getTriangleNumberByIndex(i));
        // }
        // 7 -> 36
        expect(TriangleNumbers.getTriangleNumberByIndex(7)).toBe(36);
    });

    test("getChildrenByIndex", function() {
        let testIndex = 3;
        expect(TriangleNumbers.getChildrenByIndex(testIndex).leftChildIndex).toBe(6);
    });

    test("getIndexByTriangleNumber", function() {
        let testNum = 15;
        let index = TriangleNumbers.getIndexByTriangleNumber(testNum);
        expect(index).toBe(4);
    });
    test("getRowIndexByIndex", function() {
        expect(TriangleNumbers.getRowIndexByIndex(0)).toBe(0);
        expect(TriangleNumbers.getRowIndexByIndex(1)).toBe(1);
        expect(TriangleNumbers.getRowIndexByIndex(2)).toBe(1);
        expect(TriangleNumbers.getRowIndexByIndex(3)).toBe(2);

        expect(TriangleNumbers.getRowIndexByIndex(9)).toBe(3);
        expect(TriangleNumbers.getRowIndexByIndex(8)).toBe(3);
        expect(TriangleNumbers.getRowIndexByIndex(7)).toBe(3);
        expect(TriangleNumbers.getRowIndexByIndex(6)).toBe(3);
        expect(TriangleNumbers.getRowIndexByIndex(10)).toBe(4);
        expect(TriangleNumbers.getRowIndexByIndex(5)).toBe(2);
        expect(TriangleNumbers.getRowIndexByIndex(0)).toBe(0);
    });

    //getArrayIndexByRowAndHorizontal
    test("getArrayIndexByRowAndHorizontal", function() {
        console.log("get index x,y: " + TriangleNumbers.getArrayIndexByRowAndHorizontal(0, 0));
        console.log("get index x,y: " + TriangleNumbers.getArrayIndexByRowAndHorizontal(1, 0));
        console.log("get index x,y: " + TriangleNumbers.getArrayIndexByRowAndHorizontal(2, 0));
    });
});