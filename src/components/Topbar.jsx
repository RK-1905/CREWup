import React from "react";

// Avatar using initials or click
const Avatar = ({ userName = "Explorer", onClick }) => {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm ring-2 ring-white/20 shadow-lg hover:scale-105 transition-all cursor-pointer"
    >
      {initials}
    </div>
  );
};

export default function Topbar({ userName = "Explorer", onAvatarClick }) {
  return (
    <div className="w-full px-6 py-4 flex justify-between items-center sticky top-0 z-40 backdrop-blur-xl bg-gradient-to-r from-[#0f172a]/70 to-[#1e293b]/70 border-b border-white/10 shadow-xl">
      <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        Welcome to CrewUp, {userName}!
      </h1>

      <div className="flex items-center gap-4">
        <Avatar userName={userName} onClick={onAvatarClick} />
      </div>
    </div>
  );
}
