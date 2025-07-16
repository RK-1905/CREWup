// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

export default function ProtectedRoute({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    getSession();
  }, []);

  if (loading) return <div className="text-white p-4">Loading...</div>;

  return session ? children : <Navigate to="/auth" />;
}