import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      setMessage(error ? error.message : "Check your email to confirm sign up.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      navigate("/onboarding");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(145deg, #fff 0%, #e6f7f7 50%, #ffecec 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          padding: "2.5rem",
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700" }}>
            {isSignUp ? "Create an account" : "Sign in to CREWup"}
          </h2>
          <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button
              onClick={() => setIsSignUp(false)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                fontWeight: 600,
                border: isSignUp ? "1px solid #ccc" : "2px solid #00c9a7",
                background: isSignUp ? "#f7f7f7" : "#00c9a7",
                color: isSignUp ? "#333" : "#fff",
                transition: "all 0.3s ease",
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                fontWeight: 600,
                border: isSignUp ? "2px solid #00c9a7" : "1px solid #ccc",
                background: isSignUp ? "#00c9a7" : "#f7f7f7",
                color: isSignUp ? "#fff" : "#333",
                transition: "all 0.3s ease",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.form
            key={isSignUp ? "signup" : "signin"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <button
              type="submit"
              style={{
                marginTop: "1rem",
                width: "100%",
                padding: "0.75rem",
                borderRadius: "999px",
                background: "#00c9a7",
                color: "#fff",
                fontWeight: 600,
                border: "none",
                fontSize: "1rem",
              }}
            >
              {isSignUp ? "Create Account" : "Login"}
            </button>
          </motion.form>
        </AnimatePresence>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginTop: "1.2rem", color: "#cc0000", textAlign: "center" }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  transition: "0.3s ease",
  outline: "none",
  boxShadow: "0 0 0 0 transparent",
};
