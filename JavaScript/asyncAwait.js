/*async function asAw()
{
    var a=15
    setTimeout(function()
    {
        console.log("Hello");
    },5000)
    console.log(await a);
}
console.log(asAw().then((res)=>console.log(res)))
console.log(asAw());

asAw().then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log("res");
})*/

//Instagram console Demo for post,like,comment,share

LikeCode=async ()=>{
    return new Promise ((likepost)=>{
        setTimeout(()=>{
            likepost("Liked post successfully")
        },5000)
    })
}
CommentCode=async ()=>{
    return new Promise ((commentpost)=>{
        setTimeout(()=>{
            commentpost("commented post successfully")
        },5000)
    })
}
shareCode=async ()=>{
    return new Promise ((sharepost)=>{
        setTimeout(()=>{
            sharepost("shared post successfully")
        },5000)
    })
}
async function postcode() {
    var post=new Promise((createpost)=>{
        setTimeout(()=>{
            createpost("Post created successfully")
        },5000);
     })
     const [pos,like,comment,share]=await Promise.all([post,LikeCode(),CommentCode(),shareCode()])
     console.log(pos);
     console.log(like);
    console.log(comment);
   console.log(share);
}
postcode()