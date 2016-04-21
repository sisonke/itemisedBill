var fs = require('fs');

var bills = function() {


  var files = fs.readFileSync('./ItemisedBill.csv','utf8');
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
  itemisedBill.splice(-1,1);

  return itemisedBill;
};
var result = bills();
// console.log(result);
// module.exports.bills = bills;


var specifiedProvider = function(result){
 console.log(result);
 // console.log(Provider);
      var specificProvider = [];

   for(var i = 0; i < bills.length; i++){
     var value = bills[i];
  //  console.log(bills);
     if(value.provider === Provider && value.provider != undefined){
    //  console.log(value);
       specificprovider.push(value);
     }
   }
  // console.log(specificProvider);
   return specificProvider;
 };
specifiedProvider();
 //module.exports.specifiedProvider = specifiedProvider;
