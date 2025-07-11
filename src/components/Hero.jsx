import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="section"
      style={{
        minHeight: "100vh",
        paddingTop: "7rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(145deg, #fff 0%, #e6f7f7 50%, #ffecec 100%)",
        position: "relative",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          background: "linear-gradient(90deg, #00c9a7, #9333ea)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Build side projects<br />with your future crew.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          maxWidth: "600px",
          color: "#333",
          fontSize: "1.1rem",
          marginTop: "1.5rem",
        }}
      >
        CREWup is where creators, coders, and students match up for real builds — not boring chats.
      </motion.p>

      <motion.button
        onClick={() => navigate("/auth")}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={{
          marginTop: "2.5rem",
          padding: "0.8rem 1.8rem",
          borderRadius: "999px",
          fontWeight: 600,
          background: "#00c9a7",
          color: "#fff",
          fontSize: "1rem",
        }}
      >
        Start Building 🚀
      </motion.button>

      <motion.div
        style={{ marginTop: "3rem", color: "#777", fontSize: "0.9rem" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
}
