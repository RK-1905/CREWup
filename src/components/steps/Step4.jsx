import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Step4({ onNext, onBack, formData, setFormData }) {
  const avatarUrls = [
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Emery",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Leo",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Jameson",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Brian",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Caleb",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Jade",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Mason",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Jameson2",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Oliver",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Adrian",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Amaya",
    "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Sawyer",
  ];

  const [selected, setSelected] = useState(formData.avatar || "");
  const [uploaded, setUploaded] = useState(null);
  const [touched, setTouched] = useState(false);
  const fileRef = useRef();

  useEffect(() => {
    if (selected || uploaded) {
      setTouched(true);
      setFormData((prev) => ({
        ...prev,
        avatar: uploaded || selected,
      }));
    }
  }, [selected, uploaded]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploaded(url);
      setSelected("");
    }
  };

  const isValid = (selected || uploaded) && touched;

  return (
    <div style={{ textAlign: "center" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          background: "linear-gradient(90deg, #00c9a7, #9333ea)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}
      >
        Pick or Upload Your Avatar ✨
      </h2>

      <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
        Choose a fun avatar or upload your own.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "2rem",
          padding: "0 1rem",
        }}
      >
        {avatarUrls.map((url, i) => (
          <motion.div
            key={i}
            onClick={() => {
              setSelected(url);
              setUploaded(null);
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            style={{
              border: selected === url ? "3px solid #9333ea" : "2px solid #ddd",
              borderRadius: "1rem",
              padding: "0.3rem",
              background: selected === url ? "#f9f1ff" : "#fff",
              boxShadow: selected === url ? "0 0 12px #9333ea66" : "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={url}
              alt={`Avatar ${i + 1}`}
              width={48}
              height={48}
              style={{ borderRadius: "0.75rem" }}
            />
          </motion.div>
        ))}
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <button
          onClick={() => fileRef.current.click()}
          style={{
            background: "#00c9a7",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            borderRadius: "999px",
            border: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          📸 Upload your own
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </div>

      {uploaded && (
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "0.3rem" }}>
            Preview:
          </p>
          <img
            src={uploaded}
            alt="Uploaded avatar"
            width={80}
            height={80}
            style={{
              borderRadius: "1rem",
              border: "3px solid #9333ea",
              boxShadow: "0 0 10px #9333ea55",
            }}
          />
        </div>
      )}

      <button
        onClick={onNext}
        disabled={!isValid}
        style={{
          ...nextBtn,
          opacity: isValid ? 1 : 0.5,
          cursor: isValid ? "pointer" : "not-allowed",
        }}
      >
        Next →
      </button>

      <button onClick={onBack} style={backBtn}>
        ← Back
      </button>
    </div>
  );
}

const nextBtn = {
  width: "100%",
  padding: "0.9rem",
  borderRadius: "999px",
  background: "#9333ea",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1rem",
  border: "none",
  marginTop: "1rem",
};

const backBtn = {
  width: "100%",
  padding: "0.8rem",
  borderRadius: "999px",
  background: "#eee",
  color: "#333",
  fontWeight: 600,
  fontSize: "1rem",
  border: "none",
  marginTop: "1rem",
};
