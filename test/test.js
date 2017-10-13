var assert = require('assert');
var checkType = require('./../index.js');
var obj = {
    prop1: 'value1'
};
var arr = [1, 2, {prop2: 1, prop: 2}, 4, 5];
var string = 'string';

describe('#checkType', function () {

    it('is obj', function (done) {
        assert.equal(checkType.checkType.getType(obj), 'object');
        done();
    });

    it('is array', function (done) {
        assert.equal(checkType.checkType.getType(arr), 'array');
        done();
    });

    it('is string', function (done) {
        assert.equal(checkType.checkType.getType(string), 'string');
        done();
    });
});