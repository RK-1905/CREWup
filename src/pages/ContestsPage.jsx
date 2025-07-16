import React, { useState, useEffect } from "react";
import dummyEvents from "../data/dummyEvents";
import EventCard from "../components/EventCard";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "../supabase/supabaseClient";

const ContestsPage = () => {
  const [activeTab, setActiveTab] = useState("created");
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const user = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      // Fetch contests user joined
      const { data: joinedData, error: joinedError } = await supabase
        .from("contest_requests")
        .select("contest_id")
        .eq("user_id", user.id);

      if (joinedError) {
        console.error("Error fetching joined contests:", joinedError);
      } else {
        setJoinedEvents(joinedData.map((d) => d.contest_id));
      }

      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError);
      } else {
        setCurrentUser({
          user_id: user.id,
          email: user.email,
          name: profileData?.name || "", // fallback if name isn't saved
        });
      }
    };

    fetchUserData();
  }, [user]);

  const filteredEvents =
    activeTab === "created"
      ? dummyEvents.filter(
          (e) =>
            e.created_by_id === currentUser?.user_id ||
            e.created_by === currentUser?.email ||
            e.created_by === currentUser?.name
        )
      : dummyEvents.filter((e) => joinedEvents.includes(e.id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-6">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg">
        Your Contests 🏆
      </h1>

      {/* Toggle Pills */}
      <div className="flex gap-4 mb-8">
        {["created", "joined"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full border-2 text-sm font-bold transition-all duration-300 ${
              activeTab === tab
                ? "bg-cyan-500 text-black border-cyan-400 shadow-xl"
                : "bg-transparent text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            {tab === "created" ? "Created Contests" : "Joined Contests"}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                joinedEvents={joinedEvents}
                currentUser={currentUser}
              />
            ))
          ) : (
            <div className="text-white text-lg col-span-full text-center mt-12 opacity-50">
              No {activeTab} contests yet 🚧
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContestsPage;
