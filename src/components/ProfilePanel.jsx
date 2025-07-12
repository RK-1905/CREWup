import React from "react";

export default function ProfilePanel({ data, onClose }) {
  if (!data) return null;

  const {
    name,
    age,
    college,
    location,
    interests,
    availability,
    avatar,
  } = data;

  return (
    <div className="fixed top-0 right-0 w-full sm:w-[350px] h-full bg-[#111827] shadow-2xl z-50 p-6 text-white border-l border-white/10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">👤 Your Profile</h2>
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-white text-xl font-bold"
        >
          ×
        </button>
      </div>

      <div className="flex flex-col items-center mb-6">
        <img
          src={avatar || "/default-avatar.png"}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-purple-500 shadow-md object-cover"
        />
        <h3 className="mt-3 text-xl font-bold">{name}</h3>
        <p className="text-sm text-gray-400">{age} yrs</p>
      </div>

      <div className="space-y-3 text-sm">
        <p><span className="font-semibold">🎓 College:</span> {college}</p>
        <p><span className="font-semibold">📍 Location:</span> {location}</p>
        <p><span className="font-semibold">🕒 Availability:</span> {availability}</p>
        <p><span className="font-semibold">🧠 Interests:</span></p>
        <div className="flex flex-wrap gap-2">
          {(interests || []).map((tag, i) => (
            <span key={i} className="bg-purple-700/40 px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
