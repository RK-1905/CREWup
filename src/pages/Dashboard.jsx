import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EventCard from "../components/EventCard";
import ProfilePanel from "../components/ProfilePanel";
import { dummyEvents } from "../data/dummyEvents";
import { supabase } from "../supabase/supabaseClient"; // ✅ Import Supabase

const Dashboard = () => {
  const location = useLocation();
  const [profileData, setProfileData] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const userName = location.state?.userName || localStorage.getItem("crewupUserName") || "Explorer";

  // ✅ Load profile from Supabase
  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("name", userName)
        .single();

      if (error) {
        console.error("❌ Supabase error:", error.message);
      } else {
        setProfileData(data);
      }
    };

    fetchProfile();
  }, [userName]);

  return (
    <div className="flex bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
      <Sidebar />

      <div className="ml-[75px] flex-1 flex flex-col">
        <Topbar
          userName={userName}
          onAvatarClick={() => setShowProfile(true)}
        />

        <main className="flex-1 overflow-y-auto p-6 sm:p-10 bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#1f2937]">
          <h2 className="text-2xl font-bold mb-6 drop-shadow-[0_1px_8px_rgba(255,255,255,0.2)]">
            🔥 Live Contests & Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {dummyEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </main>

        {/* ✅ Profile Drawer */}
        {showProfile && (
          <ProfilePanel data={profileData} onClose={() => setShowProfile(false)} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
