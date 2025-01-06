import { motion } from "framer-motion";
import { useState } from "react";

export function Header() {
  const [isTypingComplete, setTypingComplete] = useState(false); // Track animation completion
  const text = "Galaxy Classes"; // Text for the typewriter effect

  return (
    <div className=" bg-gradient-to-b  from-gray-900 via-purple-900 to-violet-600 flex items-center justify-center" >
    <motion.div
      className=" md:max-w-[472px] text-white flex flex-col items-center justify-center"
      initial={{ height: "100vh", width: "100%" }} // Start full screen
      animate={{
        height: "200px",
        width: isTypingComplete ? "auto" : "100%", // Shrink instantly when typing is complete
      }}
      transition={{
        height: { duration: 1, delay: 1 }, // Height transition starts after typing
        width: { duration: 0 }, // Width change is instant
      }}
    >
      {/* Typewriter Effect */}
      <motion.h1
        className="text-center md:text-6xl text-4xl font-bold"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          display: "inline-block",
          borderRight: "2px solid white", // Typewriter cursor effect
        }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1, // Total duration of typewriter effect
          ease: "linear",
        }}
        onAnimationComplete={() => setTypingComplete(true)} // Trigger width reduction instantly
      >
        {text}
      </motion.h1>
      {/* Subheading */}
      <motion.p
        className="italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }} // Appear after typewriter animation
      >
        {"Excellence in Education"}
      </motion.p>
    </motion.div>
    </div>
  );
}
