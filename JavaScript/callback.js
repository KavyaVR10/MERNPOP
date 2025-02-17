function sjitclg(message,abc){
console.log(message);
abc()
}

function callbacksjit(){
    console.log("welcome to sjit");
}
sjitclg("welcome to sjit",callbacksjit)