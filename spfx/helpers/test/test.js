'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('padLeft function test', () => {
    it('should return 01', () => {
        var result = index.padLeft('1', '0');
        expect(result).to.equal('01');
    });
});
