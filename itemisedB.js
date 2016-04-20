var fs = require('fs');

var bills = function() {


  var files = fs.readFileSync('./ItemisedBill.csv','utf8');
  var list = files.toString();

  var rows = (list.split('\r')).splice(1);
  var itemisedBill = rows.map(function(row) {
    var fields = row.split(',');
    //console.log(fields);
    return {
      Date: fields[0],
      Provider: fields[1],
      Number: fields[2],
      Duration: fields[3]
    };
  });
  itemisedBill.splice(-1,1);
//  console.log(itemisedBill);

  return itemisedBill;
};
module.exports.bills = bills;
