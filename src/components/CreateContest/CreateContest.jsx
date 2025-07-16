// src/components/CreateContest/CreateContest.jsx
import { motion } from "framer-motion";
import EmojiHeader from "./EmojiHeader";
import ContestForm from "./ContestForm";

export default function CreateContest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-6">
      <motion.div
        className="max-w-5xl w-full grid md:grid-cols-2 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <EmojiHeader />
        <ContestForm />
      </motion.div>
    </div>
  );
}
