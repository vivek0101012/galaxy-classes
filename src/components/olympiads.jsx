

export default  function Olympiad(){

    const indianOlympiads = [
        {
          name: "Indian National Mathematical Olympiad (INMO)",
          description: "One of the prestigious Olympiads in India that identifies and nurtures mathematical talent. Conducted in multiple stages by HBCSE.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/mathematical-olympiad/"
        },
        {
          name: "Indian National Science Olympiad (INSO)",
          description: "Focuses on identifying talented students in Physics, Chemistry, and Biology. It's a stepping stone to international science Olympiads.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/science-olympiad/"
        },
        {
          name: "Indian National Junior Science Olympiad (INJSO)",
          description: "Prepares younger students for the International Junior Science Olympiad, focusing on foundational concepts in Science.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/junior-science-olympiad/"
        },
        {
          name: "Indian National Astronomy Olympiad (INAO)",
          description: "Encourages interest in Astronomy and Astrophysics, leading to international representation in Astronomy Olympiads.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/astronomy-olympiad/"
        },
        {
          name: "Indian National Chemistry Olympiad (INChO)",
          description: "A platform for students to excel in Chemistry and qualify for international competitions.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/chemistry-olympiad/"
        },
        {
          name: "Indian National Physics Olympiad (INPhO)",
          description: "Focuses on nurturing young talent in Physics, providing an opportunity to compete at the international level.",
          url: "https://olympiads.hbcse.tifr.res.in/about-olympiads/stages/physics-olympiad/"
        },
        {
          name: "National Talent Search Examination (NTSE)",
          description: "A national-level program for identifying and nurturing talented students in academics, conducted by NCERT.",
          url: "https://ncert.nic.in/national-talent-examination.php?ln=en"
        },
        {
          name: "National Standard Examination (NSE)",
          description: "The first stage for many Indian Olympiads in Physics, Chemistry, Biology, Astronomy, and Junior Science.",
          url: "https://www.iapt.org.in/"
        },
        {
          name: "SOF Olympiads",
          description: "SOF conducts a variety of Olympiads in subjects like Mathematics, Science, English, and General Knowledge to develop students' academic skills.",
          url: "https://sofworld.org/"
        },
        {
          name: "Unified Council Olympiads",
          description: "Conducts exams like Unified Cyber, Maths, and Science Olympiads to foster talent among Indian students.",
          url: "https://www.unifiedcouncil.com/"
        }
      ];
      
      console.log(indianOlympiads);

      
    return <div className="py-16 bg-[#020817]">

<h3 className="text-center text-4xl font-extrabold text-cyan-400 underline decoration-dotted underline-offset-8">
   {"Olympiads"}
        </h3>

        <div
          style={{
            scrollbarWidth: 'none', // Hides scrollbar in Firefox
            msOverflowStyle: 'none', // Hides scrollbar in Internet Explorer
            overflowX: 'scroll',
          }}
        
        className=" overflow-x-scroll web flex flex-row px-3  gap-4 p-2  space-x-4 mt-10">
{
    indianOlympiads.map((e,i)=>(
        <div
  key={i}
  className={`bg-[#0C1122]  min-w-[240px] shadow-[0px_0px_2px_2px_rgba(52,56,116,1)]  hover:scale-110 transition-transform duration-300 ease-in-out  border-gray-400 rounded-lg  hover:shadow-xl p-6 text-white space-y-4`}
>
  <p className="text-lg  text-violet-300 font-extrabold tracking-wide ">{e.name}</p>
  <p className="text-sm text-green-300 text opacity-90">{e.description}</p>
  <a href={e.url} className="flex ">
    <button className="px-4 py-2 mt-4 active:scale-95  transition-transform bg-blue-600 text-white font-medium rounded-lg hover:bg-gray-100 hover:text-cyan-700 shadow-md ">
      Learn more
    </button>
  </a>
</div>

    ))

}

</div>

</div>

    }
