import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaTrophy,
  FaCompass,
  FaSignOutAlt,
  FaPlusCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
  { icon: <FaUserFriends />, label: "Teams", path: "/teams" },
  { icon: <FaTrophy />, label: "Contests", path: "/contests" },
  { icon: <FaCompass />, label: "Explore", path: "/explore" },
  { icon: <FaPlusCircle />, label: "Create Contest", path: "/create" }, // 🔥 Link to contest page
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="fixed top-0 left-0 h-full w-[80px] bg-gradient-to-b from-[#0f172a]/80 to-[#1e293b]/80 backdrop-blur-lg border-r border-white/10 shadow-2xl z-40 flex flex-col items-center py-6 space-y-6">
      <h1 className="text-2xl text-cyan-400 font-extrabold tracking-wide drop-shadow-md mb-4">
        🚀
      </h1>

      {navItems.map((item, idx) => (
        <motion.button
          key={idx}
          whileHover={{ scale: 1.15 }}
          onClick={() => navigate(item.path)} // ✅ Make it navigable
          className="group relative flex items-center justify-center w-12 h-12 text-white hover:text-cyan-400 transition-colors duration-300"
        >
          <div className="text-xl">{item.icon}</div>
          <span className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 px-3 py-1 text-xs rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-lg border border-white/20 shadow-lg z-50">
            {item.label}
          </span>
        </motion.button>
      ))}

      <div className="mt-auto pb-4">
        <motion.button
          whileHover={{ scale: 1.15 }}
          className="text-white hover:text-red-400 transition"
        >
          <FaSignOutAlt size={20} />
        </motion.button>
      </div>
    </aside>
  );
};

export default Sidebar;