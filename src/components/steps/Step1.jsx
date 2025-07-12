import { useState, useEffect } from "react";

export default function Step1({ onNext, setFormData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = name.trim() !== "" && age.trim() !== "" && !isNaN(age);

  const handleNext = () => {
    if (isValid) {
      // Save name in form data
      setFormData((prev) => ({ ...prev, name: name.trim(), age: Number(age) }));

      // ✅ Save name to localStorage for Dashboard
      localStorage.setItem("crewupUserName", name.trim());

      onNext();
    }
  };

  useEffect(() => {
    if (name || age) setTouched(true);
  }, [name, age]);

  return (
    <>
      <h2 style={title}>Let’s get to know you</h2>
      <input
        placeholder="Your full name"
        style={input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Your age"
        style={input}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
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
    </>
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

const nextBtn = {
  width: "100%",
  padding: "0.8rem",
  borderRadius: "999px",
  background: "#00c9a7",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1rem",
  border: "none",
};
