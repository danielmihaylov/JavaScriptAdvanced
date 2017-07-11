function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect;

describe("IsEvenOrOdd",function () {
    it("with number parameter it should return undefined",function () {
        let isCorrect = isOddOrEven(4);
        expect(isCorrect).to.equal(undefined,"Function did not return the correct result!");
    });
    it("with object parameter it should return undefined",function () {
        let isCorrect = isOddOrEven({pesho: 14});
        expect(isCorrect).to.equal(undefined,'Function did not return the correct result!');
    });

    it("with even length of length it should return 'even'",function () {
        let isCorrect = isOddOrEven('dani');
        expect(isCorrect).to.equal('even',"Function did not return correct result!");
    });

    it("with different length of length it should return 'odd'",function () {
        let isCorrect = isOddOrEven('ivo ima kola ');
        expect(isCorrect).to.equal('odd',"Function did not return correct result!");
    });
    it("with odd length of length it should return 'odd'",function () {
        let isCorrect = isOddOrEven('ivo');
        expect(isCorrect).to.equal('odd',"Function did not return correct result!");
    });
    it("with even length of length it should return 'even'",function () {
        let isCorrect = isOddOrEven('dani ima');
        expect(isCorrect).to.equal('even',"Function did not return correct result!");
    });
});
