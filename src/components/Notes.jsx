
import { useState } from "react"




export default function  Notes(){

    let CBSE = [
        { title: 'Class 6', description: 'Basics', url: 'https://drive.google.com/drive/folders/1DeuAh1lxRFo4DsNztTqp-Dz4Mq9YnZNO?usp=drive_link' },
        { title: 'Class 7', description: 'Intermediate', url: 'https://drive.google.com/drive/folders/1Vtfm1eBpUr0kTWfp6B22-w9X7z3_cowW?usp=drive_link' },
        { title: 'Class 8', description: 'Advanced', url: 'https://drive.google.com/drive/folders/1vymNhVePVlgT-Yi5cMykAD-xv94tpmbF?usp=drive_link' },
        { title: 'Class 9', description: 'Foundation', url: 'https://drive.google.com/drive/folders/1L_NmEcCC-TY6l7DGDX-DE9MEPOLRIM7s?usp=drive_link' },
        { title: 'Class 10', description: 'Board Prep', url: 'https://drive.google.com/drive/folders/1DBdnWogsQ2OK_Fg0ZNwK5E6l13vyl7Pp?usp=drive_link' }
      ];
      
      let ICSE = [
        { title: 'Class 6', description: 'Basics', url: 'https://drive.google.com/drive/folders/1c0BYEfXyc9evRAYeqQnM9gHQ_vhNjA-y?usp=drive_link' },
        { title: 'Class 7', description: 'Intermediate', url: 'https://drive.google.com/drive/folders/12NCUV1PpxTZtBfIrukKRF2Hl5lKM_3m4?usp=drive_link' },
        { title: 'Class 8', description: 'Advanced', url: 'https://drive.google.com/drive/folders/162d_ummrnp2wakJ8etI-sgOT09JaWHtU?usp=drive_link' },
        { title: 'Class 9', description: 'Foundation', url: 'https://drive.google.com/drive/folders/15ea_5QDjtNZop2vaCih2iPtt27Ur9v1A?usp=drive_link' },
        { title: 'Class 10', description: 'Board Prep', url: 'https://drive.google.com/drive/folders/1uBm1KPGCIJE4H6kXMfatlSz0YmMfx4Mp?usp=drive_link' }
      ];
      


    const [Board,setBoard]=useState(CBSE);


    return <div className="py-16 bg-[#020817]">


<h3 className="text-center text-4xl font-extrabold text-cyan-400 underline decoration-dotted underline-offset-8">
   {"Notes"}
        </h3>

<div className=" mt-12  grid grid-cols-2 gap-4  justify-items-center items-start text-cyan-400 ">
<div className="shadow-md shadow-blue-800 flex flex-row  justify-center items-center space-x-4  max-w-[240px] bg-yellow-600 text-white px-6 py-3 rounded-full text-lg  transition-transform duration-300  active:scale-105" onClick={()=>{setBoard(CBSE)}}>{"CBSE"}</div>
<div className="  max-w-[240px] shadow-md shadow-blue-800 flex flex-row  justify-center items-center space-x-4   bg-green-400 text-white px-6 py-3 rounded-full text-lg   transition-transform duration-300  active:scale-105 active:bg-cyan-700 " onClick={()=>{setBoard(ICSE)}}>{"ICSE"}</div>


</div>

<div className="grid px-3 grid-cols-1 md:grid-cols-5 gap-4 p-2  mt-10">
{
    Board.map((e,i)=>(
        <div
  key={i}
  className={`bg-[#0C1122] shadow-[0px_0px_2px_2px_rgba(52,56,116,1)]  hover:scale-110 transition-transform duration-300 ease-in-out  border-gray-400 rounded-lg  hover:shadow-xl p-6 text-white space-y-4`}
>
  <p className="text-xl font-extrabold tracking-wide text-center">{e.title}</p>
  <p className="text-lg text-gray-100 text-center opacity-90">{e.description}</p>
  <a href={e.url} className="flex justify-center">
    <button className="px-4 py-2 mt-4 active:scale-95  transition-transform bg-blue-600 text-white font-medium rounded-lg hover:bg-gray-100 hover:text-cyan-700 shadow-md ">
      View Notes
    </button>
  </a>
</div>

    ))

}

</div>



</div>










}