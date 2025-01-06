

export default  function Olympiad(){

    const indianOlympiads = [
        {
          name: "INMO",
          description: "Indian National Mathematical Olympiad (INMO) is one of India's most prestigious Olympiads, identifying and nurturing young mathematical talent through multiple stages organized by HBCSE.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/mathematical-olympiad/"
        },
        {
          name: "INSO",
          description: "Indian National Science Olympiad (INSO) focuses on identifying talented students in Physics, Chemistry, and Biology, providing a pathway to international science Olympiads.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/science-olympiad/"
        },
        {
          name: "INJSO",
          description: "Indian National Junior Science Olympiad (INJSO) prepares younger students for the International Junior Science Olympiad by focusing on key foundational concepts in Science.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/junior-science-olympiad/"
        },
        {
          name: "INAO",
          description: "Indian National Astronomy Olympiad (INAO) fosters interest in Astronomy and Astrophysics, with the aim of preparing students for international Astronomy Olympiads.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/astronomy-olympiad/"
        },
        {
          name: "INChO",
          description: "Indian National Chemistry Olympiad (INChO) is a platform to excel in Chemistry, aiming to select students for international Chemistry competitions.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/chemistry-olympiad/"
        },
        {
          name: "INPhO",
          description: "Indian National Physics Olympiad (INPhO) aims to nurture young talent in Physics, providing a competitive platform for aspiring international physicists.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/physics-olympiad/"
        },
        {
          name: "NTSE",
          description: "National Talent Search Examination (NTSE) is a nationwide initiative by NCERT to identify and nurture academically talented students through a rigorous selection process.",
          url: "https://ncert.nic.in/national-talent-examination.php?ln=en"
        },
        {
          name: "NSE",
          description: "National Standard Examination (NSE) serves as the first stage for various Indian Olympiads in subjects like Physics, Chemistry, Biology, Astronomy, and Junior Science.",
          url: "https://www.iapt.org.in/"
        },
        {
          name: "SOF",
          description: "The Science Olympiad Foundation (SOF) organizes various Olympiads in Mathematics, Science, English, and General Knowledge to enhance students' academic skills.",
          url: "https://sofworld.org/"
        },
        {
          name: "Unified Council",
          description: "Unified Council conducts Olympiads such as Unified Cyber, Maths, and Science Olympiads, aimed at discovering and nurturing talent among Indian students.",
          url: "https://www.unifiedcouncil.com/"
        }
      ];
      
      
     

      
    return <div className="py-16 bg-[#020817]">

<h3 className="text-center text-4xl font-extrabold text-cyan-400 underline decoration-dotted underline-offset-8">
   {"Olympiads"}
        </h3>

        <div
          style={{
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            overflowX: 'scroll',
          }}
        
        className=" overflow-x-scroll web flex flex-row px-3  gap-4 p-2  space-x-4 mt-10">
{
    indianOlympiads.map((e,i)=>(
        <div
  key={i}
  className={`bg-[#0C1122]  min-w-[240px] shadow-[0px_0px_2px_2px_rgba(52,56,116,1)]  hover:scale-110 transition-transform duration-300 ease-in-out  border-gray-400 rounded-lg  hover:shadow-xl p-6 text-white space-y-4`}
>
  <p className="text-lg   text-violet-300 font-extrabold tracking-wide ">{e.name}</p>
  <p className="text-sm  text-green-300 text opacity-90">{e.description}</p>
  <a href={e.url} className="flex  ">
    <button className="px-4 py-2 mb-2 active:scale-95  transition-transform bg-blue-600 text-white font-medium rounded-lg hover:bg-gray-100 hover:text-cyan-700 shadow-md ">
      Learn more
    </button>
  </a>
</div>

    ))

}

</div>

</div>

    }