import { useState, useEffect } from "react";

const predefinedInterests = [
  "Web3", "AI", "Startups", "Gaming", "Design", "Fintech", "HealthTech", "Open Source"
];

export default function Step3({ onNext, onBack, formData, setFormData }) {
  const [skills, setSkills] = useState(formData.skills || []);
  const [input, setInput] = useState("");
  const [interests, setInterests] = useState(formData.interests || []);
  const [touched, setTouched] = useState(false);

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setInput("");
    }
  };

  const toggleInterest = (tag) => {
    if (interests.includes(tag)) {
      setInterests(interests.filter((t) => t !== tag));
    } else {
      setInterests([...interests, tag]);
    }
  };

  const isValid = (skills.length > 0 || interests.length > 0) && touched;

  const handleNext = () => {
    if (isValid) {
      setFormData((prev) => ({
        ...prev,
        skills,
        interests,
      }));
      onNext();
    }
  };

  useEffect(() => {
    if (skills.length > 0 || interests.length > 0) {
      setTouched(true);
    }
  }, [skills, interests]);

  return (
    <>
      <h2 style={title}>Your skills + interests</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addSkill()}
        placeholder="Type a skill (e.g. React, Figma)"
        style={inputStyle}
      />

      <div style={tagContainer}>
        {skills.map((skill, i) => (
          <span key={i} style={skillTag}>{skill}</span>
        ))}
      </div>

      <p style={subtitle}>Pick some interests too:</p>

      <div style={tagContainer}>
        {predefinedInterests.map((interest, i) => (
          <button
            key={i}
            onClick={() => toggleInterest(interest)}
            style={{
              ...interestTag,
              background: interests.includes(interest)
                ? "linear-gradient(90deg, #00c9a7, #9333ea)"
                : "#eee",
              color: interests.includes(interest) ? "#fff" : "#333",
            }}
          >
            #{interest}
          </button>
        ))}
      </div>

      <div style={btnGroup}>
        <button onClick={onBack} style={backBtn}>← Back</button>
        <button
          onClick={handleNext}
          disabled={!isValid}
          style={{
            ...nextBtn,
            opacity: isValid ? 1 : 0.6,
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          Next →
        </button>
      </div>
    </>
  );
}