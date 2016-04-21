var specifiedProvider = function(bills, Provider){
 console.log(bills);
 console.log(Provider);
      var specificProvider = [];

   for(var i = 0; i < bills.length; i++){

     var value = bills[i];
      //console.log(value);
  //  console.log(bills);
     if(value.provider === Provider && value.provider != undefined){
    //  console.log(value);
       specificprovider.push(value);
     }
   }
  console.log(specificProvider);
   return specificProvider;
 };
specifiedProvider("MTN");
 //module.exports.specifiedProvider = specifiedProvider;
