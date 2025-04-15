import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./index.css";
import { JSX } from "react/jsx-runtime";

type BreathStage = {
    label: string;
    duration: number;
    scale: number;

};

const BREATH_STAGES: BreathStage[] = [
    { label: "Inhale", duration: 4000, scale: 1.5 },
    { label: "Hold", duration: 7000, scale: 1.5 },
    { label: "Exhale", duration: 8000, scale: 1 }
]

export default function Breath478(): JSX.Element {
    const [stageIndex, setStageIndex] = useState<number>(0);
    const currentStage = BREATH_STAGES[stageIndex];


useEffect(() => {
    const timer = setTimeout(() => {
        setStageIndex((prev) => (prev + 1) % BREATH_STAGES.length);

    }, currentStage.duration)
return () => clearTimeout(timer);
}, [stageIndex])

return (
    <div className="breath-wrapper">
        <motion.div
            className="breath-circle"
            animate={{
                scale: currentStage.scale,

            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
            }}
            />
<div className="breath-label"> {currentStage.label}</div>
    </div>
);
    
};
