import { useState, useEffect } from "react";

export default function Step5({ onNext, onBack, formData, setFormData }) {
  const [availability, setAvailability] = useState(formData.availability || "");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      availability,
    }));
  }, [availability]);

  return (
    <div>
      <h2 style={title}>When are you available to build?</h2>

      <select
        style={select}
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      >
        <option value="">Select an option</option>
        <option value="weekends">Weekends only</option>
        <option value="evenings">Evenings only</option>
        <option value="flexible">Flexible hours</option>
        <option value="anytime">Available anytime</option>
      </select>

      <div style={btnGroup}>
        <button onClick={onBack} style={backBtn}>
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!availability}
          style={{
            ...nextBtn,
            opacity: availability ? 1 : 0.5,
            cursor: availability ? "pointer" : "not-allowed",
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

const select = {
  width: "100%",
  padding: "0.8rem",
  fontSize: "1rem",
  borderRadius: "10px",
  background: "#fff",
  color: "#333",
  border: "1px solid #ccc",
};

const btnGroup = {
  display: "flex",
  gap: "1rem",
  marginTop: "1.5rem",
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