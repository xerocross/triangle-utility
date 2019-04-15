"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    getSquaresUpTo(max) {
        let squares = [];
        let index = 1;
        let square = 1;
        while (square < max) {
            squares.push(square);
            index++;
            square = Math.pow(index, 2);
        }
        return squares;
    },
    isPythagoreanTriple(a, b, c) {
        let sortedNumbers = [a, b, c];
        sortedNumbers.sort((x, y) => x - y);
        return Math.pow(sortedNumbers[0], 2) + Math.pow(sortedNumbers[1], 2) === Math.pow(sortedNumbers[2], 2);
    }
};
