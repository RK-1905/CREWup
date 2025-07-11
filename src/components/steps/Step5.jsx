export default function Step5({ onNext, onBack }) {
  return (
    <div>
      <h2 style={title}>When are you available to build?</h2>
      <select style={select}>
        <option>Select an option</option>
        <option>Weekends only</option>
        <option>Evenings only</option>
        <option>Flexible hours</option>
        <option>Available anytime</option>
      </select>

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
