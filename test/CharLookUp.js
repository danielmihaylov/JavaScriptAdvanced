function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect;

describe('lookUpForChar',function () {
    it('with a non-string first parameter it should return undefined',function () {
        let lookUp = lookupChar(13,5);
        expect(lookUp).to.equal(undefined,'The function did not return the correct result');
    });

    it('with a non-digit second parameter it should return undefined',function () {
        let lookUp = lookupChar('dani','ivo');
        expect(lookUp).to.equal(undefined,'The function did not return the correct result');
    });

    it('with a non-integer second parameter it should return undefined',function () {
        let lookUp = lookupChar('dani',2.5);
        expect(lookUp).to.equal(undefined,'The function did not return the correct result');
    });

    it('with a incorrect index parameter it should return incorrect index',function () {
        let lookUp = lookupChar('dani',6);
        expect(lookUp).to.equal('Incorrect index','The function did not return the correct result');
    });

    it('with a incorrect index parameter it should return incorrect index',function () {
        let lookUp = lookupChar('dani',-3);
        expect(lookUp).to.equal('Incorrect index','The function did not return the correct result');
    });
    it('with a string length equal to index value it should return incorrect index',function () {
        let lookUp = lookupChar('dani',4);
        expect(lookUp).to.equal('Incorrect index','The function did not return the correct result');
    });

    it('with correct parameters it should return correct value',function () {
        let lookUp = lookupChar('dani',0);
        expect(lookUp).to.equal('d','The function did not return the correct result');
    });

    it('with correct parameters it should return correct value',function () {
        let lookUp = lookupChar('dani',3);
        expect(lookUp).to.equal('i','The function did not return the correct result');
    });

});
