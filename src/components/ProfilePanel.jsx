import React from "react";

const ProfilePanel = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end z-50">
      <div className="w-full sm:w-[400px] bg-[#111827] text-white p-6 overflow-y-auto shadow-lg">
        <button
          className="text-white text-2xl absolute top-4 right-6 hover:text-gray-300"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
          👤 Your Profile
        </h2>

        {/* ✅ Avatar */}
        {data.avatar && (
          <div className="flex justify-center mb-4">
            <img
              src={data.avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-full border-2 border-gray-500 object-cover"
            />
          </div>
        )}

        <div className="space-y-4 text-sm">
          <p><span className="text-gray-400">Name:</span> {data.name || "N/A"}</p>
          <p><span className="text-gray-400">Age:</span> {data.age || "N/A"}</p>
          <p><span className="text-gray-400">College:</span> {data.college || "N/A"}</p>
          <p><span className="text-gray-400">Location:</span> {data.location || "N/A"}</p>
          <p><span className="text-gray-400">Interests:</span> {data.interests?.join(", ") || "N/A"}</p>
          <p><span className="text-gray-400">Availability:</span> {data.availability || "N/A"}</p>
          <p><span className="text-gray-400">Email:</span> {data.email || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;