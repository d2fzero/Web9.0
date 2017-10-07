var a = 5;
var b = 6;

console.log (a + b);
console.log("hello world")

if (a===b){
  console.log ("so sanh bang");

}else {
  console.log ("khong bang");
}
// for (var i= 0;i<10;i++){
//   console.log(i);
// }
// function Plus(a,b) {
//   return a+b;
// }
// function Minus(a,b) {
//   return a-b;
//
// }
// console.log ("tong a va b ",Plus(a,b));
// var exampleObject = {
//   objectFunction : Plus
//
// }
// var objectMinusFunction = Minus;
// console.log ("tong a va b",exampleObject.objectFunction(a,b));
// console.log ('a-b = ',objectMinusFunction(a,b));
// function writeDate() {
//   console.log(Date.now())
//
// }
// function setTimeout(callback) {
//   setTimeout(function(){
//     callback();
//
//   },1000);}
//  console.log("set time out done");
// setTimeout(writeDate);
function writeI=function () {
    console.log(value);

  }

}

function countDown(count) {
  for (let i= count ;i>=0;i--){
    setTimeout(writeI(i){
      console.log (i);
    },(count-i)*1000)
  }
}

console.log("count down");
countDown(6);
