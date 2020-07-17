const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin});
inp.on("line",(data)=>{
  console.log(data*1000)//km to meters
});

/* // Celcius convert into Fahrenheit. 
const readline = require("readline");
const inp = readline.createInterface({
input: process.stdin});
inp.on("line",(data)=>{
  	var num = ((data * 9/5) + 32)
	console.log(num.toFixed(2));
});
*/

/*//leap year
const readline = require("readline");
const inp = readline.createInterface({
input: process.stdin});
inp.on("line",(data)=>{
  if(data % 4 == 0){
     if(data % 100 == 0){
       if(data % 400 == 0){
         console.log("Y");
       }
       else{
         console.log("N");
       }
     }
     else{
       console.log("Y");
     }
  }
  else{
    console.log("N");
  }
});
*/

/*//replace & find length
const readline = require("readline");
const inp = readline.createInterface({
input: process.stdin})
inp.on("line",(data)=>{
	var data1= data.replace(" ","");
  	console.log(data1.length)
})
*/

/* split and store in array checking the small number
const readline = require("readline");
const inp = readline.createInterface({
input: process.stdin})
inp.on("line",(data)=>{
  var data1=data.split(" ")
  //console.log(data1[0])
  if(data1[0] > data1[1]){
      console.log(data1[1])
  }
  else{
	console.log(data1[0])
  }
})
*/

/*//reading multi line input stored into array & find max value
const readline = require("readline");
const inp = readline.createInterface({
input: process.stdin})
const userIn=[]
inp.on("line",(data)=>{
  userIn.push(data)
})
inp.on("close",()=>{
  Math.max.apply(Math,userIn)
  console.log(Math.max(...userIn))
})
*/