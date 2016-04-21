var fs = require('fs');

var assert = require('assert');

describe('return all the service provider information inside an object', function() {

  it('should  read and return file contents and objects', function() {
    var itemisedFunction = require('../itemisedB');
    assert.equal(itemisedFunction.bills('./ItemisedBill.csv').length, 35);
  });
});



//
describe('phone calls for the specified provider',function() {
  it('should return the specific service provider',function() {
  var specifiedProviderFunction = require('../specifedprovider');
  console.log(specifiedProviderFunction);
  assert.equal(specifiedProviderFunction.specifiedProvider("MTN").length, 16);
    });
});
