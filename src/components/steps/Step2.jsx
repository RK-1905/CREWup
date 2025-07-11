import { useState, useEffect } from "react";

export default function Step2({ onNext, onBack }) {
  const [college, setCollege] = useState("");
  const [location, setLocation] = useState("");
  const [touched, setTouched] = useState(false); // 👈 prevents Google autofill bypass

  const isValid = college.trim() !== "" && location.trim() !== "";

  const handleNext = () => {
    if (isValid) {
      onNext({ college: college.trim(), location: location.trim() });
    }
  };

  useEffect(() => {
    if (college || location) {
      setTouched(true);
    }
  }, [college, location]);

  return (
    <div>
      <h2 style={title}>Where are you building from?</h2>
      <input
        placeholder="College / University"
        style={input}
        value={college}
        onChange={(e) => setCollege(e.target.value)}
      />
      <input
        placeholder="City / Location"
        style={input}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div style={btnGroup}>
        <button onClick={onBack} style={backBtn}>← Back</button>
        <button
          onClick={handleNext}
          disabled={!isValid || !touched}
          style={{
            ...nextBtn,
            opacity: isValid && touched ? 1 : 0.6,
            cursor: isValid && touched ? "pointer" : "not-allowed",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

const title = {
  fontSize: "1.9rem",
  fontWeight: "700",
  marginBottom: "1.5rem",
  background: "linear-gradient(90deg, #00c9a7, #9333ea)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const input = {
  width: "100%",
  padding: "0.8rem",
  borderRadius: "10px",
  border: "1px solid #ccc",
  marginBottom: "1rem",
  fontSize: "1rem",
  background: "rgba(255,255,255,0.1)",
  color: "#fff",
};

const btnGroup = {
  display: "flex",
  gap: "1rem",
  marginTop: "1.2rem",
};

const backBtn = {
  flex: 1,
  padding: "0.8rem",
  borderRadius: "999px",
  background: "#eee",
  color: "#333",
  fontWeight: 600,
  border: "none",
};

const nextBtn = {
  flex: 1,
  padding: "0.8rem",
  borderRadius: "999px",
  background: "#00c9a7",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1rem",
  border: "none",
};
