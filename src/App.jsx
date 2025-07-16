// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Auth from "./components/Auth";
import Onboarding from "./components/Onboarding";
import Dashboard from "./pages/Dashboard";
import CreateContestPage from "./pages/CreateContestPage";
import ContestsPage from "./pages/ContestsPage"; // ✅ NEW IMPORT
import ProtectedRoute from "./components/ProtectedRoute";

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
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* ✅ Protected route for contest creation */}
      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <CreateContestPage />
          </ProtectedRoute>
        }
      />

      {/* ✅ NEW: Contests Page */}
      <Route
        path="/contests"
        element={
          <ProtectedRoute>
            <ContestsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
