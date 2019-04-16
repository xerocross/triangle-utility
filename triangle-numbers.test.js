"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const triangle_numbers_1 = __importDefault(require("./triangle-numbers"));
test("generate triangle numbers", function () {
    expect(triangle_numbers_1.default.generateTriangleNumbersUpTo(1).pop()).toBe(1);
    expect(triangle_numbers_1.default.generateTriangleNumbersUpTo(2).pop()).toBe(1);
    expect(triangle_numbers_1.default.generateTriangleNumbersUpTo(3).pop()).toBe(3);
    expect(triangle_numbers_1.default.generateTriangleNumbersUpTo(6).pop()).toBe(6);
    expect(triangle_numbers_1.default.generateTriangleNumbersUpTo(7).pop()).toBe(6);
    expect(triangle_numbers_1.default.generateTriangleNumbersUpTo(8).pop()).toBe(6);
    expect(triangle_numbers_1.default.generateTriangleNumbersUpTo(9).pop()).toBe(6);
    expect(triangle_numbers_1.default.generateTriangleNumbersUpTo(10).pop()).toBe(10);
});
test("getTriangleNumberByIndex", function () {
    expect(triangle_numbers_1.default.getTriangleNumberByIndex(0)).toBe(1);
    expect(triangle_numbers_1.default.getTriangleNumberByIndex(1)).toBe(3);
    expect(triangle_numbers_1.default.getTriangleNumberByIndex(2)).toBe(6);
    expect(triangle_numbers_1.default.getTriangleNumberByIndex(3)).toBe(10);
    expect(triangle_numbers_1.default.getTriangleNumberByIndex(4)).toBe(15);
});
