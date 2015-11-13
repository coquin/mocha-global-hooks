var expect = require('chai').expect;

before(function() {
    console.log('>>> global `before` hook');
});

after(function() {
    console.log('>>> global `after` hook');
});

describe('Specs', function () {
    describe('Main spec', function() {
        it('should work', function() {
            expect(true).to.be.truthly;
        });
    });
});
