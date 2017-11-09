var assert = require('assert'),
  dotNet = require('../dist/dotnet');

describe('String Tests', function () {
  describe('#String.isNullOrEmpty', function () {
    it('should return true if a string is empty', function () {
      assert.equal(String.isNullOrEmpty(""), true, "string is empty");
    });

    it('should return false if a string is not empty', function () {
      assert.notEqual(String.isNullOrEmpty("dotnet"), true, "string is not empty");
    });
  });

  describe('#String.join', function () {
    it('should combine an array in a string', function () {
      assert.equal(String.join(",", [1, 2, 3]), "1,2,3");
    });
  });

  describe('#String.prototype.padLeft', function () {
    it('given a number 3 with padleft 6 should return 000003', function () {
      assert.equal("3".padLeft(6, "0"), "000003");
    });
  });
});