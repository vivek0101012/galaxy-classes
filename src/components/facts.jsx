 
import axios from "axios";
import { useEffect, useState } from "react"




export default function Facts(){
    const [Facts,setfacts]=useState(" ");

useEffect(
    ()=>{
       const fetchfact= async ()=>{
            axios.get("http://numbersapi.com/random/math?json").then(res=>{
                setfacts(res.data.text);
             
            })
        }
        fetchfact();
    }
  
    
    
    
    ,[])

 
return <div className="py-2 shadow-[0px_0px_2px_2px_rgba(52,56,116,1)] bg-[#020817]">


<p className="text-2xl md:text-4xl text-indigo-400  text-italic text-center"> {"Maths facts for the day"}</p>

<div className="w-full rounded-xl mt-4  p-2 text-center   text-white">
    
  <p className="mt-4 text-lg font-dancing  md:text-2xl"> {Facts}</p> 
</div>




</div>

}