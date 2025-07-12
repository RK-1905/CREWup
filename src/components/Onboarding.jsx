import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../supabase/supabaseClient";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";

const steps = [Step1, Step2, Step3, Step4, Step5, Step6];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const checkProfile = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) return;

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (
        !profileError &&
        profile?.name &&
        profile?.college &&
        profile?.interests &&
        profile.interests.length > 0
      ) {
        // ✅ Redirect to dashboard
        navigate("/dashboard", { state: { userName: profile.name } });
      }
    };

    checkProfile();
  }, []);

  const CurrentStep = steps[step];

  const next = (stepData = {}) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    if (step < steps.length - 1) setStep(step + 1);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div style={wrapperStyle}>
      <div style={bgGradient} />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={cardStyle}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <CurrentStep
              onNext={next}
              onBack={back}
              formData={formData}
              setFormData={setFormData}
            />

            {/* Progress bar */}
            <div style={{ marginTop: "2rem", width: "100%" }}>
              <div
                style={{
                  height: "6px",
                  background: "#333",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${((step + 1) / steps.length) * 100}%`,
                    height: "100%",
                    background: "linear-gradient(to right, #00c9a7, #9333ea)",
                    transition: "width 0.4s ease",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#aaa",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                Step {step + 1} of {steps.length}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

const wrapperStyle = {
  minHeight: "100vh",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#0f0f0f",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  padding: "2rem",
};

const bgGradient = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(ellipse at 20% 30%, #00c9a740 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, #9333ea50 0%, transparent 60%)",
  zIndex: 0,
};

const cardStyle = {
  width: "100%",
  maxWidth: "500px",
  padding: "2.5rem",
  borderRadius: "2rem",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  zIndex: 2,
  color: "#fff",
};