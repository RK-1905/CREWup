export default function Step1({ onNext }) {
  return (
    <>
      <h2 style={title}>Let’s get to know you</h2>
      <input placeholder="Your full name" style={input} />
      <input type="number" placeholder="Your age" style={input} />
      <button onClick={onNext} style={nextBtn}>Next →</button>
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
