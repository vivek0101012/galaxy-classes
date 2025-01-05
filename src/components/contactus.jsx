

export default function Contactus(){
    return <div className="py-16 bg-gray-900 ">
 <h3 className="text-center text-4xl font-extrabold text-cyan-400 underline decoration-dotted underline-offset-8">
   {"Contact US"}
        </h3>

        <div className="mt-10 text-center text-white">


        <p className="text-xl text-white">
            <span className="font-semibold text-purple-400">Address:</span> Your Coaching Location
          </p>
          <p className="text-xl flex flex-row  justify-center items-center mt-4">
            <span className="font-semibold flex flex-row items-center justify-center gap-1 text-green-400">  <a href="https://imgbb.com/"><img src="https://i.ibb.co/6JBBH5d/whatsapp.png" alt="whatsapp" border="0" width={24} /></a> | Phone: </span> +91-7054722558
          </p>
          <div className="mt-6 flex items-center justify-center">
          <a href="https://maps.app.goo.gl/GBM9H8dSoBKqkJCEA">
            <button className=" flex flex-row  justify-center items-center space-x-4 bg-gradient-to-r from-green-400 to-cyan-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/DC9zXDq/maps.png" alt="maps" width={24} border="0"/></a> View on Google Maps
            </button></a>
          </div>
        </div>
    </div>
}