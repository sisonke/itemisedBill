var fs = require('fs');

var bills = function() {


  var files = fs.readFileSync('./ItemisedBill.csv', 'utf8');
  var list = files.toString();

  var rows = (list.split('\r')).splice(1);
  var itemisedBill = rows.map(function(row) {
    var fields = row.split(',');
    return {
      Date: fields[0],
      Provider: fields[1],
      Number: fields[2],
      Duration: fields[3]
    };
  });
  itemisedBill.splice(-1, 1);
  // console.log(itemisedBill);
  return itemisedBill;
};
//var result = bills();
module.exports.bills = bills;


var specifiedProvider = function(bills, provider) {
  var specificProvider = [];
  for (var i in bills) {
    var value = bills[i];
    if (value.Provider === provider) {
      specificProvider.push(value);
    }
  }
  //console.log(specificProvider);
  return specificProvider;
};

module.exports.specifiedProvider = specifiedProvider;

var totalCalls = function (bills,number) {
  console.log(number);
  var Callsmade = [];
  for (var n in bills) {
    var value = bills[n];
   if(value.Number === number) {
    Callsmade.push(value);
    console.log(Callsmade);
  }
}
console.log(Callsmade);
//return Callsmade;
}
//Callsmade("MTN");
 module.exports.totalCalls = totalCalls;
