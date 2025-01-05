export default function Batches(){

    const batches = [
        { batchName: "Batch A", timing: " 5:30 PM - 6:30 PM" },
        { batchName: "Batch B", timing: "6:30 PM- 7:30 PM" }
      ];
      
    
      


return <div className="py-16 bg-[#020817] ">

<h3 className="text-center text-4xl font-extrabold text-cyan-400 underline decoration-dotted underline-offset-8">
   {"Batches"}
        </h3>

<div className="  mt-10 px-2 justify-items-center items-center flex flex-col md:flex-row  justify-center gap-10">
    {
    batches.map((e,i)=>(<div key={i}     className={` 
shadow-2xl shadow-blue-500/20  max-w-[280px] bg-gradient-to-br from-indigo-500 to-pink-500

 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out  p-6 text-white space-y-2`} >

<div className="text-3xl">{e.batchName}</div>
<h1 className="font-bold text-2xl">{e.timing}</h1>

        </div>
    ))
    }

</div>










</div>












}