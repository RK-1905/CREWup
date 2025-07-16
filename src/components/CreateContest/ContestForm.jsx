// src/components/CreateContest/ContestForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlowingInput from "./GlowingInput";
import TagSelector from "./TagSelector";
import TogglePills from "./TogglePills";
import PillOptions from "./PillOptions";
import ConfettiSuccess from "./ConfettiSuccess";
import { supabase } from "../../supabase/supabaseClient";
import dayjs from "dayjs";

const eventTypes = ["Hackathon", "Contest", "Collab", "Jam"];
const suggestions = {
  skills: ["React", "UI Design", "AI", "Prompting", "UX", "Backend"],
  tech: ["Node.js", "Firebase", "Supabase", "Tailwind", "Three.js"],
  tags: ["Web3", "Hackathon", "Learning", "Open Source", "Startup"],
};

export default function ContestForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    team_size: "",
    event_type: eventTypes[0],
    skills_needed: [],
    tech_stack: [],
    tags: [],
    creator_note: "",
    image_url: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) return;
      setUser(user);

      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("name, avatar")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error.message);
      } else {
        setProfile(profileData);
        console.log("Fetched profile:", profileData);
      }
    });
  }, []);

  const addTagItem = (field, val) => {
    if (val && !form[field].includes(val)) {
      setForm((prev) => ({ ...prev, [field]: [...prev[field], val] }));
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const required = [
      "title",
      "description",
      "date",
      "location",
      "team_size",
      "creator_note",
    ];

    const hasEmpty = required.some((field) => {
      const value = form[field];
      if (typeof value === "string") return value.trim() === "";
      return value === null || value === undefined || value === "";
    });

    if (hasEmpty) {
      alert("Fill all required fields");
      return;
    }

    if (!user) {
      alert("Log in first");
      return;
    }

    const payload = {
      ...form,
      created_by: profile?.name || user.email,
      creator_avatar: profile?.avatar || user.user_metadata.avatar_url || "",
      created_at: dayjs().toISOString(),
    };

    console.log("Final payload:", payload); // Optional debugging

    const { error } = await supabase.from("contests").insert([payload]);
    if (error) return alert("Error: " + error.message);

    setSubmitted(true);
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  if (submitted) return <ConfettiSuccess />;

  return (
    <form onSubmit={handleSubmit} className="p-8 relative space-y-4">
      <GlowingInput
        label="Title*"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Contest Title..."
      />
      <GlowingInput
        label="Description*"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="What's it about?"
      />
      <GlowingInput
        label="Date*"
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
      />
      <GlowingInput
        label="Location*"
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Online / City / Hybrid"
      />
      <GlowingInput
        label="Team Size*"
        name="team_size"
        type="number"
        value={form.team_size}
        onChange={handleChange}
        placeholder="e.g., 4"
      />

      <TogglePills
        label="Event Type"
        options={eventTypes}
        selected={form.event_type}
        setSelected={(v) => setForm({ ...form, event_type: v })}
      />

      {/* Skills Needed */}
      <TagSelector
        label="Skills Needed"
        tags={form.skills_needed}
        setTags={(a) => setForm({ ...form, skills_needed: a })}
        placeholder="Add skills..."
      />
      <PillOptions
        options={suggestions.skills}
        selected={form.skills_needed}
        onSelect={(val) => addTagItem("skills_needed", val)}
      />

      {/* Tech Stack */}
      <TagSelector
        label="Tech Stack"
        tags={form.tech_stack}
        setTags={(a) => setForm({ ...form, tech_stack: a })}
        placeholder="Add technologies..."
      />
      <PillOptions
        options={suggestions.tech}
        selected={form.tech_stack}
        onSelect={(val) => addTagItem("tech_stack", val)}
      />

      {/* Tags */}
      <TagSelector
        label="Tags"
        tags={form.tags}
        setTags={(a) => setForm({ ...form, tags: a })}
        placeholder="Add tags..."
      />
      <PillOptions
        options={suggestions.tags}
        selected={form.tags}
        onSelect={(val) => addTagItem("tags", val)}
      />

      <GlowingInput
        label="Creator Note*"
        name="creator_note"
        value={form.creator_note}
        onChange={handleChange}
        placeholder="Inspire your crew..."
      />

      <GlowingInput
        label="Image URL (optional)"
        name="image_url"
        value={form.image_url}
        onChange={handleChange}
        placeholder="https://..."
      />

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:brightness-110 transition-shadow shadow-lg mt-4"
      >
        🚀 Launch Contest
      </button>
    </form>
  );
}
