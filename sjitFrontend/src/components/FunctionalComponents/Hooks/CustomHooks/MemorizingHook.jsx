import {useEffect,useState} from "react";
const useMemoize=(key,value)=>{
   var[text,setText]=useState(()=>{
    var jsonValue=localStorage.getItem(key)
    if(jsonValue!=null){
        return JSON.parse(jsonValue);
    }
    return value;
   });
   useEffect(()=>{
    localStorage.setItem(key,value)
   },[key,value])
   return [text,setText]
};
export default useMemoize;