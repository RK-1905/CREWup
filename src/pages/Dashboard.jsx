import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EventCard from "../components/EventCard";
import ProfilePanel from "../components/ProfilePanel";
import { supabase } from "../supabase/supabaseClient";

const Dashboard = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("Explorer");

  const [joinedEvents, setJoinedEvents] = useState([]);
  const [liveContests, setLiveContests] = useState([]);
  const [loadingContests, setLoadingContests] = useState(true);

  const fetchJoinedEvents = async (userId) => {
    const { data, error } = await supabase
      .from("crew_requests")
      .select("event_id")
      .eq("user_id", userId);

    if (error) {
      console.error("❌ Failed to fetch joined events:", error.message);
    } else {
      const eventIds = data.map((item) => item.event_id);
      setJoinedEvents(eventIds);
    }
  };

  // 🛠️ THIS FUNCTION IS NOW UPDATED TO ACCEPT `message`
  const handleJoinEvent = async (eventId, message) => {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      alert("You're not logged in.");
      return;
    }

    const { data: existingRequest } = await supabase
      .from("crew_requests")
      .select("*")
      .eq("event_id", eventId)
      .eq("user_id", user.id)
      .maybeSingle();

    if (existingRequest) {
      alert("✅ You've already sent a join request for this event.");
      return;
    }

    const { error: insertError } = await supabase.from("crew_requests").insert([
      {
        event_id: eventId,
        user_id: user.id,
        message: message || "Excited to join!", // Fallback if message is empty
      },
    ]);

    if (insertError) {
      console.error("❌ Failed to send join request:", insertError.message);
      alert("Something went wrong. Please try again.");
    } else {
      alert("🚀 Join request sent successfully!");
      setJoinedEvents((prev) => [...prev, eventId]);
    }
  };

  const fetchUserAndProfile = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("⛔ Not logged in");
      navigate("/");
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
      const fullProfile = { ...profile, email: user.email, user_id: user.id };
      setProfileData(fullProfile);
      setUserName(profile.name || "Explorer");
      localStorage.setItem("crewupUserName", profile.name || "Explorer");
      fetchJoinedEvents(user.id);
    }
  };

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

    const fullProfile = { ...profile, email: user.email, user_id: user.id };
    setProfileData(fullProfile);
    setShowProfile(true);
  };

  const fetchContests = async () => {
    setLoadingContests(true);
    const { data, error } = await supabase
      .from("contests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("❌ Failed to fetch contests:", error.message);
    } else {
      setLiveContests(data);
    }
    setLoadingContests(false);
  };

  useEffect(() => {
    fetchUserAndProfile();
    fetchContests();
  }, []);

  return (
    <div className="flex bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
      <Sidebar />

      <div className="ml-[75px] flex-1 flex flex-col">
        <Topbar userName={userName} onAvatarClick={handleAvatarClick} />

        <main className="flex-1 overflow-y-auto p-6 sm:p-10 bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#1f2937]">
          <h2 className="text-2xl font-bold mb-6 drop-shadow-[0_1px_8px_rgba(255,255,255,0.2)]">
            🔥 Live Contests & Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {loadingContests ? (
              <p className="text-white/40 col-span-full">Loading contests...</p>
            ) : liveContests.length > 0 ? (
              liveContests.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onJoin={handleJoinEvent} // 🧠 Passes (eventId, message)
                  joinedEvents={joinedEvents}
                  currentUser={profileData}
                />
              ))
            ) : (
              <p className="text-white/50 col-span-full">
                No live contests yet. Be the first to create one!
              </p>
            )}
          </div>
        </main>

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
