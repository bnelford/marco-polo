'use strict';

// jshist expr: true

var chai = require('chai'),
  expect = chai.expect;

  chai.should();

  function isEven(num) {
    return num % 2 ===0;
  }

  describe('isEven', function() {
    it('should return true when number is even', function() {
      isEven(4).should.be.true;
    });

    it('should return false when number is odd', function() {
      isEven(5).should.be.false;
    });
  });