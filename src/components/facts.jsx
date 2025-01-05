/* eslint-disable react-hooks/exhaustive-deps */
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

    console.log(Facts)
return <div className="py-16 bg-[#020817]">


<p className="text-2xl md:text-4xl text-indigo-400  text-italic text-center"> {"Maths facts for the day"}</p>

<div className="w-full rounded-xl mt-4  p-2 text-center   text-white">
    
  <p className="mt-4 text-lg font-satisfy text-green-300 md:text-2xl"> "{Facts}"</p> 
</div>




</div>

}