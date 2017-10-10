// const fs = require('fs');
const express = require('express');
const fileController = require ('./fileController');
const path =require('path');
// const testObject ="test.json";
// let fileString ="file hello world";
// let outputFileName = "test.json"
// // let testObject ={
// //   a :1,
// //   b :2,
// // }
// let result = fileController.readFile(outputFileName);
// console.log(result)
// let testwriteModuleObject ={
//   test1 : "test1",
//   test2 : "test2"
// }
//
// fileController.writeFile(outputFileName,testwriteModuleObject);
let app = express();
app.get('/',(req,res)=>{
  console.log(__dirname);
  res.sendFile(__dirname + "/public/public/index.html");

});
app.get('/style.css',(req,res)=>{
  res.sendFile(__dirname + "/public/public/style.css");
});


app.get('/about',(reg,res)=>{
  res.sendFile(__dirname + "/public/public/cv.html");

});

app.get('/testhtml',(req,res)=>{
  let es5String ="abc"+ test.toString()+"ads";
  let es6String =`abc"+ ${test}+"ads`;
  res.send("<h1>Test html<h1>");
});

app.get('/question',(req,res)=>{
  res.send("<h1> test <h1>");
});
app.listen(6969,(err)=>{
  if (err){
    console.log(err);
  } else {
    console.log("website is up");
  }
});
