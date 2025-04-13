import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div>
      <motion.div
        className="breath-circle"
        animate={{
          scale: [1, 1.5, 1],  
          opacity: [0.8, 1, 0.8],
          filter: ["blur(0.5px)", "blur(1.5px)", "blur(0.5px)"],

        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default App;
