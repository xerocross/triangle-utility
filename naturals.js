"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const we_assert_1 = __importDefault(require("we-assert"));
let we = we_assert_1.default.build();
const Naturals = {
    getDivisors(num) {
        we.assert.that(num >= 1, "num >= 1");
        let divisors = [1];
        for (let i = 2; i < num; i++) {
            if (num % i == 0)
                divisors.push(i);
        }
        divisors.push(num);
        return divisors;
    },
    getProperDivisors(num) {
        let divisors;
        divisors = this.getDivisors(num);
        divisors.pop();
        return divisors;
    },
    sumProperDivisors(num) {
        let divisors = this.getDivisors(num);
        let properDivisors = divisors;
        properDivisors.pop(); // remove num from list
        let sum = 0;
        for (let i = 0; i < properDivisors.length; i++)
            sum += properDivisors[i];
        return sum;
    },
    isAmicablePair(a, b) {
        return a != b && this.sumProperDivisors(a) == b && this.sumProperDivisors(b) == a;
    },
    findAmicableNumbersUnder(max) {
        let amicableNums = [];
        for (let a = 2; a < max; a++) {
            if (amicableNums.indexOf(a) > -1) {
                continue;
            }
            let b = this.sumProperDivisors(a);
            if (a != b && this.sumProperDivisors(b) == a) {
                amicableNums.push(a);
                if (amicableNums.indexOf(b) == -1)
                    amicableNums.push(b);
            }
        }
        return amicableNums;
    }
};
exports.default = Naturals;
