import { motion } from "framer-motion";

export function Header() {
  const text = "Galaxy Classes";

  return (
    <motion.div
      initial={{ height: "100vh" }}
      animate={{ height: ["100vh", "200px"] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: 0.1,
      }}
      className="flex  flex-col items-center w-full space-y-2 py-4 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white justify-center"
    >
      <motion.h1
        className="md:text-6xl text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
<div className="flex flex-row">
  {text.split("").map((e, i) => {
    // Modify e before returning it
    let modifiedChar = e == "C" ? "     C"  : e;
   modifiedChar = e == "y" ? "     y"  : e;
console.log(modifiedChar);
    return (
      <motion.h1
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: i * 0.15 }}
        className=""
      >
        {modifiedChar}
      </motion.h1>
    );
  })}
</div>

      
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 1.5, 
          delay: 2.2, 
          ease: "easeInOut", 
        }}
        className="italic"
      >
        {"Excellence in Education"}
      </motion.p>
    </motion.div>
  );
}
