import axios from "axios";
import { useEffect, useState } from "react";

export default function Facts() {
  const [facts, setFacts] = useState("");

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const res = await axios.get("http://numbersapi.com/random/math?json");
        setFacts(res.data.text);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setFacts("Could not load fact, try again later.");
      }
    };
    fetchFact();
  }, []);

  console.log(facts);

  return (
    <div className="py-16 bg-[#020817]">
      <p className="text-2xl md:text-4xl text-indigo-400 text-italic text-center">
        {"Maths facts for the day"}
      </p>
      <div className="w-full rounded-xl mt-4 p-2 text-center text-white">
        <p className="mt-4 text-lg font-satisfy text-green-300 md:text-2xl">
          {facts}
        </p>
      </div>
    </div>
  );
}
