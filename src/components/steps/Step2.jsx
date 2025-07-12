import { useState, useEffect } from "react";

export default function Step2({ onNext, onBack, formData, setFormData }) {
  const [college, setCollege] = useState(formData.college || "");
  const [location, setLocation] = useState(formData.location || "");
  const [touched, setTouched] = useState(false);

  const isValid = college.trim() !== "" && location.trim() !== "";

  const handleNext = () => {
    if (isValid) {
      setFormData((prev) => ({
        ...prev,
        college: college.trim(),
        location: location.trim(),
      }));
      onNext(); // no need to pass data anymore
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