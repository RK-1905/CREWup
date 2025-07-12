import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="relative w-full max-w-[450px] p-[2px] rounded-2xl bg-gradient-to-br from-pink-500/30 to-blue-500/20 backdrop-blur-md border border-white/10 shadow-[0_0_20px_#0ff3] hover:shadow-[0_0_35px_#0ff6] transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Event Type Badge */}
      <div className="absolute top-3 right-3 px-3 py-1 bg-white/10 text-xs text-white rounded-full font-medium backdrop-blur-sm border border-white/20">
        {event.eventType}
      </div>

      {/* Event Image */}
      <div className="rounded-xl overflow-hidden h-[180px] w-full mb-4">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="px-5 pb-4">
        {/* Title */}
        <h2 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
          <BsStars className="text-pink-400" />
          {event.title}
        </h2>

        {/* Description */}
        <p className="text-white/80 text-sm mb-3">{event.description}</p>

        {/* Info Line */}
        <div className="flex flex-wrap gap-3 text-white/70 text-xs mb-4">
          <span className="flex items-center gap-1">
            <IoCalendar /> {event.date}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {event.location}
          </span>
          <span className="flex items-center gap-1">
            <FaUserFriends /> {event.teamSize}
          </span>
        </div>

        {/* Creator + Note */}
        <div className="bg-white/5 p-3 rounded-lg border border-white/10 mb-3">
          <div className="flex items-center gap-2 text-sm text-white/90 mb-1">
            {event.creatorAvatar ? (
              <img
                src={event.creatorAvatar}
                alt={event.createdBy}
                className="w-6 h-6 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
            ) : (
              <HiOutlineUserCircle className="text-xl text-white/80" />
            )}
            <span className="font-medium">{event.createdBy}</span>
          </div>
          <p className="text-white/70 text-xs italic">{event.creatorNote}</p>
        </div>

        {/* Skills Needed */}
        <div className="mb-3">
          <p className="text-white/70 text-sm mb-1 font-medium">Skills Needed:</p>
          <div className="flex flex-wrap gap-2">
            {event.skillsNeeded.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-[2px] text-xs bg-purple-500/20 border border-purple-500/40 text-purple-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-3">
          <p className="text-white/70 text-sm mb-1 font-medium">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {event.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-[2px] text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <p className="text-white/70 text-sm mb-1 font-medium">Tags:</p>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-[2px] text-xs bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-100 border border-white/10 rounded-full shadow-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={event.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:underline text-sm font-medium"
        >
          Join Event <FiExternalLink />
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;
