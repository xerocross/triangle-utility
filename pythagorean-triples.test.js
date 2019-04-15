import PythagoreanTriples from "./pythagorean-triples";

test("get some squares", function() {
    let squares = PythagoreanTriples.getSquaresUpTo(100);
    expect(squares.pop()).toBe(81);
})

test("is pythagorean triple", function() {
    expect(PythagoreanTriples.isPythagoreanTriple(4, 3, 5)).toBe(true);
})