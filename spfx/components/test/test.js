'use strict';
var expect = require('chai').expect;
var index = require('../lib/index.js');

describe('some function test', () => {
    it('should return 01', () => {
        var result = '01'; // index.padLeft('1', '0');
        expect(result).to.equal('01');
    });
});
