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

const navItems = [
  { icon: <FaHome />, label: "Dashboard" },
  { icon: <FaUserFriends />, label: "Teams" },
  { icon: <FaTrophy />, label: "Contests" },
  { icon: <FaCompass />, label: "Explore" },
  { icon: <FaPlusCircle />, label: "Create Contest" },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-[80px] bg-gradient-to-b from-[#0f172a]/80 to-[#1e293b]/80 backdrop-blur-lg border-r border-white/10 shadow-2xl z-40 flex flex-col items-center py-6 space-y-6">
      <h1 className="text-2xl text-cyan-400 font-extrabold tracking-wide drop-shadow-md mb-4">
        🚀
      </h1>

      {navItems.map((item, idx) => (
        <motion.button
          key={idx}
          whileHover={{ scale: 1.15 }}
          className="group relative flex items-center justify-center w-12 h-12 text-white hover:text-cyan-400 transition-colors duration-300"
        >
          <div className="text-xl">{item.icon}</div>
          <span className="absolute left-16 whitespace-nowrap bg-white/10 px-3 py-1 text-xs rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/10 shadow-md">
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