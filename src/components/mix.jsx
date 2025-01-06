
import Facts from "./facts";
import Links from "./importantlinks";

export default function Mix(){

 return <div
 className="px-4 bg-[#020817]"
>
    <div className=" grid   md:space-x-4  max-h-[240px] grid-cols-1 md:grid-cols-2 ">

<Facts></Facts> 
     <Links></Links>

    </div>





</div>

}