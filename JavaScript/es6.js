//1. variables - refer declarations
//2. arrow function
/*
function testFunction()
{
    console.log("This is a test function");
}
testFunction()

ArrowFunction=()=>
{
    console.log("Arrow Function");
}
ArrowFunction()

//3. Scoping
var a=10
console.log(a);  // 10
{
     let a =20;   // Local scope
    console.log(a);  // 20
    let b =30;
    console.log(b);  // 30
    var c =40;
    console.log(c);  // 40
    a =50;
    console.log(a);  // 50
    f=35;
}
console.log(a);  // 10
console.log(c);  // 40
console.log(f);  // 35

//4.ternary operator

a=11
console.log((a%2)?"odd":"even");

//5.spread operator->(...) This three dot is the spread operator
student1year=["user1","user2","user3"]
student2year=["user4","user5","user6"]
student3year=["user7","user8","user9"]
student4year=["user10","user11","user12"]
stuDB=[...student1year,...student2year,...student3year,...student4year]
console.log(stuDB);
aluminiDB=student4year
console.log(aluminiDB);

//6.rest operator(...) Difference between rest and spread operator
//Spread operator-spread/ unpacks the iterable elements like array,object and string into a single element //SPREAD
//rest operator- collects the multiple single elements and compress it to arrray //COLLECT

function studentDB(...stuDB)
{
    console.log(stuDB);
}
studentDB(stuDB)

//7.Destructing operator -> []
var array=[10,20,30,40,50,60]
var[a,b,c,d,e]=array
console.log(a,b,c,d,e);*/

//8.Hoisting

console.log(a);
var a=10;
console.log(a);


funHoisting()

/*function funHoisting()
{
    console.log("Checkinf functional hoisting");
}*/

funHoisting=()=>{
    console.log("Checking functional hoisting");
}

//9.class and objects

class classeg{
    classFunc=()=>{
        console.log("Hello func from class");
    }
}
obj=new classeg()
console.log(obj.classFunc());
