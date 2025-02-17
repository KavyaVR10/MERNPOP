function sjitclg(message,abc){
console.log(message);
abc()
}

function callbacksjit(){
    console.log("welcome to sjit");
}
sjitclg("welcome to sjit",callbacksjit)

function formsubmission(message,cbFun)
{
    cbFun()
    console.log(message);
}

function formvalidation()
{
    console.log("Form Validation is successfull");
}