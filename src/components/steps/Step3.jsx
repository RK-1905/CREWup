import { useState, useEffect } from "react";

const predefinedInterests = [
  "Web3", "AI", "Startups", "Gaming", "Design", "Fintech", "HealthTech", "Open Source"
];

export default function Step3({ onNext, onBack }) {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");
  const [interests, setInterests] = useState([]);
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
      onNext({ skills, interests });
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

const title = {
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
};

const subtitle = {
  fontSize: "1rem",
  fontWeight: "500",
  margin: "1.2rem 0 0.5rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  marginBottom: "1rem",
  background: "rgba(255,255,255,0.1)", // ✅ subtle background
  color: "#fff",                       // ✅ fixes invisible typing issue
};

const tagContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginBottom: "1rem",
};

const skillTag = {
  padding: "0.5rem 0.9rem",
  borderRadius: "20px",
  background: "#00c9a7",
  color: "#fff",
  fontWeight: 500,
  fontSize: "0.9rem",
  border: "none",
};

const interestTag = {
  padding: "0.5rem 0.9rem",
  borderRadius: "20px",
  fontWeight: 500,
  fontSize: "0.9rem",
  border: "none",
  cursor: "pointer",
  transition: "0.3s ease",
};

const btnGroup = {
  display: "flex",
  gap: "1rem",
  marginTop: "1.5rem",
};

const nextBtn = {
  flex: 1,
  padding: "0.75rem",
  borderRadius: "999px",
  background: "#00c9a7",
  color: "#fff",
  fontWeight: 600,
  border: "none",
  fontSize: "1rem",
};

const backBtn = {
  flex: 1,
  padding: "0.75rem",
  borderRadius: "999px",
  background: "#eee",
  color: "#333",
  fontWeight: 600,
  border: "none",
  fontSize: "1rem",
};