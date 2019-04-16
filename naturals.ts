//@ts-ignore
import WeAssert from "we-assert";
let we = WeAssert.build();

const Naturals = {
    getDivisors (num: number) {
        we.assert.that(num >= 1, "num >= 1");
        let divisors = [1];
        for (let i = 2; i < num; i++) {
            if (num % i == 0)
                divisors.push(i)
        }
        divisors.push(num)
        return divisors;
    },
    getProperDivisors (num: number) {
        let divisors;
        divisors = this.getDivisors(num);
        divisors.pop();
        return divisors;
    },
    sumProperDivisors (num: number) {
        let divisors;
        try {
            divisors = this.getDivisors(num);
        } catch(e) {
            console.log("what is this?")
            console.log(this);
            console.log(e);
            throw "^^^^^^^^^^^^^^^^^^^^";
        }
        let properDivisors = divisors;
        properDivisors.pop(); // remove num from list
        let sum = 0;
        for (let i = 0; i < properDivisors.length; i++)
            sum+=properDivisors[i];
        return sum;
    },
    isAmicablePair (a: number, b: number) {
        return a != b && this.sumProperDivisors(a) == b && this.sumProperDivisors(b) == a;
    },
    findAmicableNumbersUnder(max: number) {
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
}
export default Naturals;