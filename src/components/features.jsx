export default function Features(){
    const features = [
        { title: "24/7 Doubts Support", description: "Get assistance anytime, anywhere to clear your doubts instantly.", icon: "💬" },
        { title: "Weekly Tests", description: "Regular tests to evaluate your progress and identify improvement areas.", icon: "📝" },
        { title: "Guided Revision", description: "Expert-led revision sessions to ensure better retention of key concepts.", icon: "📚" },
        { title: "Well-Curated Notes", description: "Access well-structured notes for every subject, making learning easier.", icon: "🗂️" },
        { title: "Expert Faculty", description: "Learn from experienced teachers with years of expertise in guiding students.", icon: "👨‍🏫" },
        { title: "Doubt Clearing Sessions", description: "Dedicated sessions for deep dives into complex topics and concepts.", icon: "🔍" }
      ];
    
return <div className="py-16  mt-48 md:mt-8 bg-[#020817] text-gray-100">
      <h3 className="text-center text-4xl font-extrabold text-cyan-400 underline decoration-dotted underline-offset-8">
   {" Features"}
        </h3>
<div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 ">
    {
        features.map((e,index)=>(
<div key={index}
    className={` bg-gray-500 bg-opacity-10 shadow-[0px_0px_2px_2px_rgba(52,56,116,1)]  rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out  p-6 text-white space-y-2`}
>
<div className="text-5xl">{e.icon}</div>
<h1 className="font-bold text-2xl">{e.title}</h1>
              <p>{e.description}</p>
     
    
</div>



        ))
    }
</div>
</div>







}