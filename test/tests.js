var fs = require('fs');

var assert = require('assert');

describe('return all the service provider information inside an object', function() {

  it('should  read and return file contents and objects', function() {
    var itemisedFunction = require('../itemisedB');
    assert.equal(itemisedFunction.bills('./ItemisedBill.csv').length, 35);
  });
});

//For MTN phone calls only
describe('phone calls for the specified provider',function() {
  it('should return the specific service provider',function() {
    var itemisedFunction = require('../itemisedB');
 var specifiedProvider = itemisedFunction.bills();
  // console.log(specifiedProvider);
  assert.equal(itemisedFunction.specifiedProvider(specifiedProvider, 'MTN').length, 16);
    });
});

//For Vodacom phone calls only
describe('phone calls for the specified provider',function() {
  it('should return the specific service provider',function() {
    var itemisedFunction = require('../itemisedB');
 var specifiedProvider = itemisedFunction.bills();
  // console.log(specifiedProvider);
  assert.equal(itemisedFunction.specifiedProvider(specifiedProvider, 'Vodacom').length, 8);
    });
});

//For Cell C phone calls only
describe('phone calls for the specified provider',function() {
  it('should return the specific service provider',function() {
    var itemisedFunction = require('../itemisedB');
 var specifiedProvider = itemisedFunction.bills();
  // console.log(specifiedProvider);
  assert.equal(itemisedFunction.specifiedProvider(specifiedProvider, 'CellC').length, 11);
    });
});
