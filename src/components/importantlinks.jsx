
export default function Links(){
    const importantLinks = [
        {
          label: "CBSE Official Website",
          url: "https://www.cbse.gov.in/cbsenew/cbse.html"
        },
        {
          label: "CISCE Official Website",
          url: "https://cisce.org/"
        },
        {
          label: "UPMSP Official Website",
          url: "https://upmsp.edu.in/"
        },
        {
          label: "NCERT National Talent Examination",
          url: "https://ncert.nic.in/national-talent-examination.php?ln=en"
        },
        {
          label: "JSO Campus Feed",
          url: "https://jso.indapt.org.in/campusfeed?cat=all"
        },
        {
          label: "Mathematical Olympiad Stages",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/mathematical-olympiad/"
        }
      ];
      
   return <div className="py-16 bg-[#020817] ">

<div className=" px-4 flex flex-row ">
<img src="src/images/live.gif" width={24} alt="" />
<p className="text-white ">@Latest updates</p>
</div>

<div className="mt-4 p-1 ">
{
 importantLinks.map((e,i)=>(
<div key={i}  className="text-center p-2 text-green-400  bg-gray-600 bg-opacity-10 animate-pulse shadow-[0px_0px_2px_2px_rgba(52,56,116,1)] ">
<a href={e.url}>
    <p>{e.label}</p>
</a>
</div>

 ))
   


}

</div>











   </div>
      










}