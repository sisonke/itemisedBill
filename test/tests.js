var fs = require('fs');

var assert = require('assert');

describe('return all the service provider information inside an object', function() {

  it('should  read and return file contents and objects', function() {
    var itemisedB = require('../itemisedB');
    assert.equal(itemisedB.bills('./ItemisedBill.csv').length, 35);
  });
});
