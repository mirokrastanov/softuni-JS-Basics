const { expect, assert } = require('chai');

function sum(a, b) {
    return a + b;
}


describe('Main test', function () {
    it('works with whole numbers', function () {
        expect(sum(3, 5)).to.equal(8);
        // assert.equal(sum(0.1, 0.2), 0.3);    --- this is the ASSERT syntex - doing the same as above line
    });
    it('works with floating-point numbers', function () {
        expect(sum(0.1, 0.2)).to.equal(0.3);
    });
});