

export default function Contactus(){
    return <div className="py-4 bg-gray-900  ">
 <h3 className="text-center text-4xl font-extrabold text-cyan-400 underline decoration-dotted underline-offset-8">
   {"Contact US"}
        </h3>

        <div className="mt-10 text-center text-white">


        <p className="text-xl text-white">
            <span className="font-semibold text-purple-400">Address:</span> Neena thapa road,Kunraghat Gorakhpur
          </p>
          <p className="text-xl flex flex-row  justify-center items-center mt-4">
            <span className="font-semibold flex flex-row items-center justify-center gap-1 text-green-400">  <img src="https://i.ibb.co/6JBBH5d/whatsapp.png" alt="whatsapp" border="0" width={24} /> | Phone: </span> +91-7054722558
          </p>
          <div className="mt-6 flex items-center justify-center">
          <a href="https://maps.app.goo.gl/GBM9H8dSoBKqkJCEA">
            <button className=" flex flex-row  bg-gray-500 bg-opacity-10 justify-center items-center space-x-4 shadow-[0px_0px_2px_2px_rgba(52,56,116,1)]  text-white px-8 py-3 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out">
           <img src="https://i.ibb.co/DC9zXDq/maps.png" alt="maps" width={24} border="0"/> View on Google Maps
            </button></a>
          </div>
        </div>
    </div>
}