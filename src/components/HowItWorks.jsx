import { motion } from "framer-motion";

const steps = [
  {
    emoji: "📣",
    title: "Post Contests",
    desc: "Launch your idea. Describe what you're building and who you need.",
  },
  {
    emoji: "⚡",
    title: "Match Instantly",
    desc: "Get requests from people who actually want to ship things fast.",
  },
  {
    emoji: "🚀",
    title: "Start Building",
    desc: "Form crews, launch projects, and level up your profile with real builds.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section"
      style={{
        background: "#fff",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "4rem",
        }}
      >
        How CREWup Works ⚙️
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "#fdfdfd",
              border: "1px solid #eee",
              borderRadius: "1.5rem",
              padding: "2rem",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{step.emoji}</div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{step.title}</h3>
            <p style={{ fontSize: "0.95rem", marginTop: "0.5rem", color: "#555" }}>
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
