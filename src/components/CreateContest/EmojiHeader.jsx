// src/components/CreateContest/EmojiHeader.jsx
export default function EmojiHeader() {
  return (
    <div className="p-8 flex flex-col justify-start space-y-6 h-full">
      <div className="mt-6"> {/* 👈 add margin top if needed */}
        <h2 className="text-4xl font-extrabold text-white leading-tight">
          Rally your crew. <br />
          Launch a contest. <br />
          Make something epic. 🚀
        </h2>
        <p className="text-white/80 mt-3">Fill out the form — it’s quick, fun, creative!</p>
        <div className="flex flex-wrap gap-2 text-2xl mt-4">
          🧠 💡 🎯 💻 ✨ 👾 🛠️
        </div>
      </div>
    </div>
  );
}
