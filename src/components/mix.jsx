
import Facts from "./facts";
import Links from "./importantlinks";

export default function Mix(){

 return <div
 className="py-16 bg-[#020817]"
>
    <div className=" grid space-x-4 p-4 h-[240px] grid-cols-1 md:grid-cols-2 ">

<Facts></Facts> 
     <Links></Links>

    </div>





</div>

}