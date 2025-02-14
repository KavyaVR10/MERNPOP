object1={
    "firstname":"St.joseph",
    "lastname":"Institute of technology", //even string is given in double quotes output will be in single quote only
    "depts":"cse,it,ads,ece",
    "training":"MERN"
    }
    console.log(object1)
    console.log(object1.depts)
    console.log(object1["training"])

    //2nd type of object declaration
    object2={}
    firstname="firstname"
    object2["firstname"]="Hello"
    object2["lastname"]='SJIT'
    object2["training"]=["MERN","HTML","CSS","REACT","EXPRESS","MONGODB","hosting"]
    console.log(object2)

    //3rd way of object declaration
    object3=new Object()
    console.log(object3) //OUTPUT:{} empty braces
    object3.training="MERN"
    object3.depts=["CSE","IT","AD","ECE"]
    console.log(object3.depts)

    //Set last way of array declaration
   set=new Set()
   console.log(set); //Output: Set(0)={}
   set=new Set("Hello")
   console.log(set); //OUTPUT: Set(4) { 'H', 'e', 'l', 'o' }

   set=new Set(["Hello"])
   console.log(set); 
   set.add("hello")
   console.log(set); 
   set.add("hello")
   console.log(set)//output:Set(2) { 'Hello', 'hello' } because set will remove duplicate elements
   console.log(typeof(set));