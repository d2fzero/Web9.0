var socket = io()
var usernameElement = document.getElementById("username");
var messageElement = document.getElementById('message');
var sendMessageElement = document.getElementById("sendMessage");

socket.on("userconnect",data =>{
  console.log(data);
})

sendMessageElement.addEventListener("click",()=>{
  var messageObject ={user :usernameElement.value,
  message : messageElement.value};
  
})
