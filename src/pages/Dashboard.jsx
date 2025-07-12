import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EventCard from "../components/EventCard";
import ProfilePanel from "../components/ProfilePanel";
import { dummyEvents } from "../data/dummyEvents";
import { supabase } from "../supabase/supabaseClient";

const Dashboard = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("Explorer");

  // ✅ Check auth and fetch profile
  useEffect(() => {
    const fetchUserAndProfile = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("⛔ Not logged in");
        navigate("/"); // redirect if not authenticated
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (profileError) {
        console.error("❌ Profile fetch error:", profileError.message);
      } else {
        // ✅ Attach email to profile data
        const fullProfile = { ...profile, email: user.email };

        setProfileData(fullProfile);
        setUserName(profile.name || "Explorer");
        localStorage.setItem("crewupUserName", profile.name || "Explorer");
      }
    };

    fetchUserAndProfile();
  }, [navigate]);

  // ✅ Re-fetch profile on avatar click to ensure latest info
  const handleAvatarClick = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (error) {
      console.error("❌ Refresh profile error:", error.message);
      return;
    }

    const fullProfile = { ...profile, email: user.email };
    setProfileData(fullProfile);
    setShowProfile(true);
  };

  return (
    <div className="flex bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
      <Sidebar />

      <div className="ml-[75px] flex-1 flex flex-col">
        <Topbar
          userName={userName}
          onAvatarClick={handleAvatarClick}
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
          <ProfilePanel
            data={profileData}
            onClose={() => setShowProfile(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;