import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./index.css";


const BREATH_STAGES = [
  { label: "Inhale", duration: 4, scale: 2, glow: 100 },
  { label: "Hold", duration: 7, scale: 2, glow: 100 },
  { label: "Exhale", duration: 8, scale: 1.0, glow: 40 },
];



export default function BreathCycle478() {
  const [stageIndex, setStageIndex] = useState(0);
  const currentStage = BREATH_STAGES[stageIndex];

  const [countdown, setCountdown] = useState(currentStage.duration)
  
  useEffect(() => {
    setCountdown(currentStage.duration);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // stop early to avoid -1 flicker
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      setStageIndex((prev) => (prev + 1) % BREATH_STAGES.length);
    }, currentStage.duration * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [stageIndex]);

  
  return (
    <div style={{ textAlign: "center" }}>
      <div className="breath-wrapper">
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
      <div className="breath-countdown">{countdown}</div>
      </div>
    </div>
  );
}

