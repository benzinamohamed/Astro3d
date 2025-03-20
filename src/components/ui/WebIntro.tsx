import { motion } from "framer-motion";

const AstroIntro = ({ onFinish }: { onFinish: () => void }) => {



  

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 3.5 }}
      onAnimationComplete={onFinish}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Welcome to Astro ClassRoom
        </motion.h1>
        
    
          <motion.div
            className="text-center text-gray-400 flex flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p>Press <span className="bg-gray-800 px-2 py-1 rounded">Enter</span> to fix a tab</p>
            <p>Press <span className="bg-gray-800 px-2 py-1 rounded">Esc</span> to cancel the fixed tab</p>
            <motion.h1
              className="mt-4 text-center text-gray-400 flex flex-col gap-2"
            >
                Enable full screen for a better experince
            </motion.h1>
          </motion.div>
        
      </motion.div>
      
      <motion.div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AstroIntro;