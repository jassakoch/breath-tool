import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./index.css";


const BREATH_STAGES = [
  { label: "Inhale", duration: 4, scale: 1.4, glow: 80 },
  { label: "Hold", duration: 7, scale: 1.4, glow: 80 },
  { label: "Exhale", duration: 8, scale: 1.0, glow: 30 },
];

export default function BreathCycle478() {
  const [stageIndex, setStageIndex] = useState(0);
  const currentStage = BREATH_STAGES[stageIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStageIndex((prev) => (prev + 1) % BREATH_STAGES.length);
    }, currentStage.duration * 1000);

    return () => clearTimeout(timeout);
  }, [stageIndex]);

  return (
    <div style={{ textAlign: "center" }}>
      <motion.div
        className="breath-circle"
        animate={{
          scale: currentStage.scale,
          boxShadow: `0 0 ${currentStage.glow}px rgba(54, 174, 255, 0.5), 
                      0 0 ${currentStage.glow + 20}px rgba(54, 174, 255, 0.3), 
                      0 0 ${currentStage.glow + 40}px rgba(54, 174, 255, 0.2)`,
        }}
        transition={{
          duration: currentStage.duration,
          ease: "easeInOut",
        }}
        
      />
      <div className="breath-label">{currentStage.label}</div>
    </div>
  );
}

