import React from "react";

const ProfilePanel = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end z-50">
      <div className="w-full sm:w-[400px] bg-[#111827] text-white p-6 overflow-y-auto shadow-lg relative">
        <button
          className="text-white text-2xl absolute top-4 right-6 hover:text-gray-300"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
          👤 Your Profile
        </h2>

        {data.avatar && (
          <img
            src={data.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border border-gray-500 mb-4"
          />
        )}

        <div className="space-y-4 text-sm">
          <p><span className="text-gray-400">Name:</span> {data.name || "N/A"}</p>
          <p><span className="text-gray-400">Age:</span> {data.age || "N/A"}</p>
          <p><span className="text-gray-400">College:</span> {data.college || "N/A"}</p>
          <p><span className="text-gray-400">Location:</span> {data.location || "N/A"}</p>
          <p>
            <span className="text-gray-400">Interests:</span>{" "}
            {Array.isArray(data.interests) ? data.interests.join(", ") : data.interests || "N/A"}
          </p>
          <p><span className="text-gray-400">Availability:</span> {data.availability || "N/A"}</p>
          <p><span className="text-gray-400">Email:</span> {data.email || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;