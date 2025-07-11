// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks";
import Auth from "./components/Auth";
import Onboarding from "./components/Onboarding";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <HowItWorks />
          </>
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}
