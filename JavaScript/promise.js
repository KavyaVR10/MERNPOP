/*function promiseg(value)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(value)
               resolve("The promise is resolved")
            else 
                reject("This promise is rejected due to invalid reason")
        },5000);
    })
}
promiseg(false).then((res)=>{
    console.log(res);
})
.catch((res)=>{
    console.log(res);
});
*/

//Location finder
//1.Promise(LocationFound,LocationNotfound)
//2.Chennai,2000

function locationFinder(loc, time) {
  var location = new Promise((locFound, locNotfound) => {
    //another way of promise declaration
    setTimeout(() => {
      if (isLocationFound(loc, time)) {
        locFound(loc);
      } else {
        locNotfound(loc, "Not found");
      }
    }, time);
  });

location.then((found)=>{
    console.log(found);
}).catch((notFound)=>{
    console.log(notFound);
})
}

isLocationFound = (loc, time) => {
  location = "Chennai";
  t = 3000;
  if (loc === location && t <= time) {
    return true;
  } else {
    return false;
  }
};
locationFinder("Chennai",2000);
