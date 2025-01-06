export default function Classes() {
    return (
      <div className="py-16  bg-[#020817]">
        <h3 className="text-center text-4xl font-extrabold text-cyan-400 underline decoration-dotted underline-offset-8">
          Boards & Classes We Teach
        </h3>
  
        {/* Class Boards Section */}
        <div className="mt-10   grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 px-6">
          {[
            {
              title: "CBSE",
              colors: "from-indigo-500 to-blue-500",

            },
            {
              title: "ICSE",
              colors: "from-red-500 to-yellow-500",
             
            },
            {
              title: "UP Board English",
              colors: "from-green-500 to-teal-500",
             
            }
          ].map((e, index) => (
            <div
              key={index}
              className={` max-w- flex items-center justify-center rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out bg-gradient-to-br ${e.colors} p-6 text-white flex flex-col space-y-2`}
            >
              <h1 className="font-bold md:text-3xl text-2xl">{e.title}</h1>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
  
       
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
          {[
            {
              title: "Class 6",
              colors: "from-teal-400 to-green-400",
              description:
                "Tailored learning to build a strong foundation in Math & Science and excel in upcoming exams."
            },
            {
              title: "Class 7",
              colors: "from-purple-400 to-pink-400",
              description:
                "Focused coaching to enhance understanding of key concepts and prepare for school-level exams with confidence."
            },
            {
              title: "Class 8",
              colors: "from-blue-400 to-teal-400",
              description:
                "Comprehensive study plans to master essential topics and build a strong base for high school exams."
            },
            {
              title: "Class 9",
              colors: "from-yellow-400 to-orange-400",
              description:
                "In-depth learning of advanced topics to tackle school exams and prepare for board-level questions."
            },
            {
              title: "Class 10",
              colors: "from-red-400 to-purple-400",
              description:
                "Intensive coaching to perfect problem-solving skills and ensure success in board exams with confidence."
            }
          ].map((e, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out bg-gradient-to-br ${e.colors} p-6 text-white flex flex-col space-y-2`}
            >
              <h1 className="font-bold text-3xl">{e.title}</h1>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  



