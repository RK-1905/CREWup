// src/components/CreateContest/ConfettiSuccess.jsx
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiSuccess() {
  useEffect(() => {
    confetti({ particleCount: 100, spread: 150, origin: { y: 0.6 } });
  }, []);
  return (
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <p className="text-2xl text-white font-bold animate-bounce">
        🚀 Contest Launched!
      </p>
    </div>
  );
}
