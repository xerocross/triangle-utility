export default {
    getSquaresUpTo(max : number) :number[] {
        let squares : number[] = [];
        let index = 1;
        let square = 1;
        while (square < max) {
            squares.push(square);
            index++;
            square = index**2;
        }
        return squares;
    },
    isPythagoreanTriple(a: number, b: number, c: number) : boolean {
        let sortedNumbers = [a, b, c];
        sortedNumbers.sort((x,y)=>x-y);
        return sortedNumbers[0]**2 + sortedNumbers[1]**2 === sortedNumbers[2]**2
    }
}