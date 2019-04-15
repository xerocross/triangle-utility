import Triangles from "./triangles.js";

describe("General:",function() {
    test("we can generate a simple list of triangle numbers", function() {
        let x = new Triangles();
        for (let i = 1; i < 50; i++) {
            console.log(i + " : " + x.generateTriangleNumbers(i));
        }
    });
});