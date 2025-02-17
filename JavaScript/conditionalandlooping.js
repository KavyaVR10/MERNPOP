//Conditional Statement

/*
1.Normal if
2.if... else...
3.nessted if...
4.else if ladder
5.switch
*/
if(5<10)
{
    console.log(true)
}
else{
    console.log(false)
}

//Looping Statement
/*
1.While
2.do...while
3.for(;;)
4.forin
5.forof
6.forEach
*/
array=[10,20,30,"abc",true,"hello",[10,20,30]]
for(i in array)
{
console.log(array[i])
}

object2={}
firstname="firstname"
object2["firstname"]="Hello"
object2["lastname"]='SJIT'
object2["training"]=["MERN","HTML","CSS","REACT","EXPRESS","MONGODB","hosting"]


//forin loop
 for(i in object2)
 {
    console.log(i)    //print the keys output:firstnam lastname  training
 }

 //forof loop
 for(key of Object.keys(object2))
 {
    console.log(key)     //print the keys output:firstnam lastname  training
 }

 for(value of Object.values(object2))
    {
       console.log(value)     //print the Values output:Hello   SJIT  [ 'MERN',    'HTML', 'CSS',     'REACT','EXPRESS', 'MONGODB', 'hosting']
    }


    for([key,value] of Object.entries(object2))
        {
           console.log({key,value})     //prints Both key and values in object
        }

//forEach

array.forEach((ele)=>{
   console.log(ele);
})

Object.keys(object2).forEach((key)=>{
   console.log(key);
})

Object.values(object2).forEach((value)=>{
   console.log(value);
})

Object.entries(object2).forEach((key,value)=>{
   console.log(key,value);
})


let a=10
while(a<12)
{
   console.log(a);
   a++;
}
console.log(a);


