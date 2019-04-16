"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const we_assert_1 = __importDefault(require("we-assert"));
let we = we_assert_1.default.build();
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
    },
    findPythagoreanTriple(int) {
        we.assert.that(int >= 3, "int >= 3");
        for (let i = 1; i < int - 1; i++) {
            let remainder = int - i;
        }
    }
};
