export default function Step2({ onNext, onBack }) {
  return (
    <div>
      <h2 style={title}>Where are you building from?</h2>
      <input placeholder="College / University" style={input} />
      <input placeholder="City / Location" style={input} />
      <div style={btnGroup}>
        <button onClick={onBack} style={backBtn}>← Back</button>
        <button onClick={onNext} style={nextBtn}>Next →</button>
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
