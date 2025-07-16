// src/components/CreateContest/PillOptions.jsx
import React from "react";

export default function PillOptions({ options, onSelect, selected }) {
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onSelect(opt)}
          className={`px-3 py-1 rounded-full text-sm transition duration-200 ${
            selected.includes(opt)
              ? "bg-purple-500 text-white shadow"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
