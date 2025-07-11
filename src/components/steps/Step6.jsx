import { useNavigate } from "react-router-dom";

export default function Step6({ onBack }) {
  const navigate = useNavigate();

  return (
    <div>
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
        You’re in! 🎉
      </h2>

      <p style={{ fontSize: "1rem", color: "#ccc", marginBottom: "1.5rem" }}>
        Time to join contests and find your crew.
      </p>

      <button
        type="button"
        style={nextBtn}
        onClick={() => navigate("/dashboard")}
      >
        🚀 Launch CREWup
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
  cursor: "pointer",
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
  cursor: "pointer",
};
