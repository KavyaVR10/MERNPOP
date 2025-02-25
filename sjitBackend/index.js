const express = require("express");
const mdb = require("mongoose");
const dotenv=require("dotenv")
const Signup=require("./models/signupSchema")
const app = express();
const PORT = 3001;
dotenv.config()
app.use(express.json());

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MDB Connection Successfull");
  })
  .catch((err) => {
    console.log(" check your String Connection",err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend Server </h1>");
});
/*
app.get("/static", (req, res) => {
  res.sendFile(
    "E:\MERNPOP\sjitBackend\index.js"
  );
});*/
app.post("/signup",(req,res)=>{
  try{
    console.log(req.body);
    const{firstName,lastName,email,password,phoneNumber}=req.body

  const newSignup=new Signup({
    firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        phoneNumber:phoneNumber,

  });
newSignup.save()
console.log("Signup successfull");
res.status(201).json({message:"Signup Successful",isSignup:"true"});
}catch(error){
  console.log(error);
  res.status(201).json({message:"Signup UnSuccessful",isSignup:"false"});
}
});

app.listen(PORT, () => console.log(` Server started successfully on port ${PORT}`));
