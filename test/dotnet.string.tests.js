var assert = require('assert'),
    dotNet = require('../dist/dotnet');

describe('String Tests', function() {
  describe('#String.isNullOrEmpty', function() {
    it('should return true if a string is empty', function() {
      assert.ok(String.isNullOrEmpty(""), "string is empty");
    });
  });
});