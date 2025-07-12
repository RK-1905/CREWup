import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useState } from "react";

export default function Step6({ onBack, formData }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLaunch = async () => {
    setLoading(true);
    setError("");

    const {
      name,
      age,
      college,
      location,
      interests,
      avatar,
      availability,
    } = formData;

    try {
      // ✅ Get logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError("You must be logged in to save your profile.");
        setLoading(false);
        return;
      }

      // ✅ Format interests array
      const formattedInterests = Array.isArray(interests)
        ? interests
        : typeof interests === "string"
        ? interests.split(",").map((s) => s.trim())
        : [];

      // ✅ Prepare payload
      const payload = {
        user_id: user.id,
        name,
        age: Number(age),
        college: college || null,
        location: location || null,
        interests: formattedInterests,
        avatar,
        availability,
      };

      console.log("📦 Sending to Supabase:", payload);

      // ✅ Step 3: Set user_id context via RPC
      const { error: rpcError } = await supabase.rpc("set_user_id_context", {
        uid: user.id,
      });

      if (rpcError) {
        console.error("⚠️ RPC error:", rpcError);
        setError("Could not set user context.");
        setLoading(false);
        return;
      }

      // ✅ Step 4: Upsert profile
      const { error: insertError } = await supabase
        .from("profiles")
        .upsert(payload, { onConflict: ["user_id"] });

      if (insertError) {
        console.error("🔥 Insert error:", insertError);
        setError(`Failed to save your profile: ${insertError.message}`);
        setLoading(false);
        return;
      }

      // ✅ Navigate to dashboard
      navigate("/dashboard", { state: { userName: name } });
    } catch (err) {
      console.error("⚠️ Unexpected error:", err);
      setError("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

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

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <button
        type="button"
        style={{
          ...nextBtn,
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "wait" : "pointer",
        }}
        onClick={handleLaunch}
        disabled={loading}
      >
        {loading ? "🚀 Saving..." : "🚀 Launch CREWup"}
      </button>

      <button onClick={onBack} style={backBtn} disabled={loading}>
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
