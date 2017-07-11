let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;

describe('Math enforcer', function () {
    describe('add', function () {
        it('should return undefined for non number parameter', function () {
            let added = mathEnforcer.addFive('4');
            expect(added).to.be.equal(undefined);
        });
        it('should return correct result for negative number parameter', function () {
            let added = mathEnforcer.addFive(-4);
            expect(added).to.be.equal(1);
        });
        it('should return correct result for number parameter', function () {
            let added = mathEnforcer.addFive(3);
            expect(added).to.be.equal(8);
        });
        it('should return correct result for floating number parameter', function () {
            let added = mathEnforcer.addFive(35.5);
            expect(added).to.be.equal(40.5);
        });
    });

    describe('subtractTen',function () {
        it('should return undefined for non number parameter', function () {
            let subtractTen = mathEnforcer.subtractTen('35.5');
            expect(subtractTen).to.be.equal(undefined);
        });
        it('should return correct result for number parameter', function () {
            let subtractTen = mathEnforcer.subtractTen(35);
            expect(subtractTen).to.be.equal(25);
        });
        it('should return correct result for negative number parameter', function () {
            let subtractTen = mathEnforcer.subtractTen(-5);
            expect(subtractTen).to.be.equal(-15);
        });
        it('should return correct result for floating number parameter', function () {
            let subtractTen = mathEnforcer.subtractTen(35.5);
            expect(subtractTen).to.be.equal(25.5);
        });
    });

    describe('sum',function () {
        it('should return undefined for non number parameter', function () {
            let sum = mathEnforcer.sum('35.5',5);
            expect(sum).to.be.equal(undefined);
        });
        it('should return correct result for number parameter', function () {
            let sum = mathEnforcer.sum(5,5);
            expect(sum).to.be.equal(10);
        });
        it('should return correct result for negative number parameter', function () {
            let sum = mathEnforcer.sum(-5,2);
            expect(sum).to.be.equal(-3);
        });
        it('should return correct result for floating number parameter', function () {
            let sum = mathEnforcer.sum(35.5,12.2);
            expect(sum).to.be.equal(47.7);
        });
    });
});
