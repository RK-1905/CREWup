// src/components/CreateContest/GlowingInput.jsx
export default function GlowingInput({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div className="relative w-full">
      <label className="block text-sm mb-1 text-white/80">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/10 text-white placeholder-white/40 px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition appearance-none"
      />
    </div>
  );
}
