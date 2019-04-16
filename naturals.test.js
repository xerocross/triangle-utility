import Naturals from "./naturals"

test("proper divisors", function() {
    let x = 220;
    console.log("proper divisors 220 : " + Naturals.getProperDivisors(x));
});

test("sum proper divisors", function() {
    expect(Naturals.sumProperDivisors(220)).toBe(284);
    expect(Naturals.sumProperDivisors(284)).toBe(220);
});

test("sum proper divisors", function() {
    expect(Naturals.isAmicablePair(284, 220)).toBe(true);
});

test("findAmicableNumbersUnder", function() {
    let amicableNums = Naturals.findAmicableNumbersUnder(10001);
    console.log(amicableNums);
    let sum = 0;
    for (let i = 0; i < amicableNums.length; i++) {
        sum+= amicableNums[i];
        console.log(sum);
    }
    console.log("sum: " + sum);

});