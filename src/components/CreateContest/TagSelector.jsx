// src/components/CreateContest/TagSelector.jsx
import { useState } from "react";

export default function TagSelector({ label, tags, setTags, placeholder }) {
  const [input, setInput] = useState("");
  const add = () => {
    const v = input.trim();
    if (v && !tags.includes(v)) setTags([...tags, v]);
    setInput("");
  };
  return (
    <div className="mb-4">
      <label className="block text-sm mb-2 text-white/80">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full cursor-pointer"
            onClick={() => setTags(tags.filter((x) => x !== t))}
          >
            ✕ {t}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), add())}
        placeholder={placeholder}
        className="w-full bg-white/10 text-white placeholder-white/40 px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}
