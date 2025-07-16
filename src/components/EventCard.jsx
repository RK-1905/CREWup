import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import dayjs from "dayjs";

const EventCard = ({ event, onJoin, joinedEvents, currentUser }) => {
  const [isJoined, setIsJoined] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [joinMessage, setJoinMessage] = useState("");

  const isCreator =
    event.created_by_id === currentUser?.user_id ||
    event.created_by === currentUser?.email ||
    event.created_by === currentUser?.name;

  useEffect(() => {
    setIsJoined(joinedEvents?.includes(event.id));
  }, [joinedEvents, event.id]);

  const handleJoinClick = () => {
    if (!isJoined && !isCreator && joinMessage.trim()) {
      onJoin(event.id, joinMessage.trim());
      setIsJoined(true);
      setShowModal(false);
    }
  };

  return (
    <motion.div
      className="relative w-full max-w-[450px] p-[2px] rounded-2xl bg-gradient-to-br from-pink-500/30 to-blue-500/20 backdrop-blur-md border border-white/10 shadow-[0_0_20px_#0ff3] hover:shadow-[0_0_35px_#0ff6] transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Event Type Badge */}
      <div className="absolute top-3 right-3 px-3 py-1 bg-white/10 text-xs text-white rounded-full font-medium backdrop-blur-sm border border-white/20">
        {event.event_type}
      </div>

      {/* Banner Image */}
      <div className="rounded-xl overflow-hidden h-[180px] w-full mb-4">
        <img
          src={event.image_url}
          alt={event.title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="px-5 pb-4">
        <h2 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
          <BsStars className="text-pink-400" />
          {event.title}
        </h2>

        <p className="text-white/80 text-sm mb-3">{event.description}</p>

        {/* Date, Location, Team */}
        <div className="flex flex-wrap gap-3 text-white/70 text-xs mb-4">
          <span className="flex items-center gap-1">
            <IoCalendar /> {dayjs(event.date).format("DD-M-YYYY")}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {event.location}
          </span>
          <span className="flex items-center gap-1">
            <FaUserFriends /> {event.team_size}
          </span>
        </div>

        {/* Creator Info */}
        <div className="bg-white/5 p-3 rounded-lg border border-white/10 mb-3">
          <div className="flex items-center gap-2 text-sm text-white/90 mb-1">
            {event.creator_avatar ? (
              <img
                src={event.creator_avatar}
                alt={event.created_by}
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <HiOutlineUserCircle className="text-xl text-white/80" />
            )}
            <span className="font-medium">{event.created_by}</span>
          </div>
          <p className="text-white/70 text-xs italic">{event.creator_note}</p>
        </div>

        {/* Skills */}
        {event.skills_needed?.length > 0 && (
          <div className="mb-3">
            <p className="text-white/70 text-sm mb-1 font-medium">Skills Needed:</p>
            <div className="flex flex-wrap gap-2">
              {event.skills_needed.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-[2px] text-xs bg-purple-500/20 border border-purple-500/40 text-purple-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {event.tech_stack?.length > 0 && (
          <div className="mb-3">
            <p className="text-white/70 text-sm mb-1 font-medium">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {event.tech_stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-[2px] text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {event.tags?.length > 0 && (
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
        )}

        {/* CTA Buttons */}
        {!isCreator && (
          <>
            {!isJoined && (
              <button
                onClick={() => setShowModal(true)}
                className="w-full mt-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:brightness-110 shadow-md hover:shadow-lg transition-all duration-300"
              >
                🚀 Request to Crew Up
              </button>
            )}
            {isJoined && (
              <div className="w-full mt-4 py-2 rounded-lg text-center bg-green-600 text-white text-sm font-semibold cursor-default">
                ✅ Crew Up Request Sent
              </div>
            )}
          </>
        )}

        {/* Contest Link */}
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-center text-cyan-300 hover:underline text-sm font-medium"
          >
            View Contest Details <FiExternalLink className="inline" />
          </a>
        )}
      </div>

      {/* Join Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a1a1a] rounded-xl p-6 max-w-md w-full mx-4 border border-white/20 shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-white text-lg font-semibold mb-3">
                🚀 Why do you want to crew up?
              </h3>
              <textarea
                rows={3}
                value={joinMessage}
                onChange={(e) => setJoinMessage(e.target.value)}
                placeholder="Your message to the event creator..."
                className="w-full p-3 rounded-lg bg-white/10 text-white text-sm border border-white/20 placeholder-white/50 mb-4"
              />
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleJoinClick}
                  disabled={!joinMessage.trim()}
                  className="px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold text-sm hover:bg-pink-700 disabled:opacity-30"
                >
                  Send Request
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EventCard;
