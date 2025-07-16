// src/components/CreateContest/TogglePills.jsx
export default function TogglePills({ label, options, selected, setSelected }) {
  return (
    <div className="mb-4">
      <label className="text-sm text-white/80 mb-2 block">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            type="button"
            className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${
                selected === opt
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
