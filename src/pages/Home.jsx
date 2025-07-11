import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCTA = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/signup"; // or "/login"
    }, 3000);
  };

  return (
    <div className="bg-blackish min-h-screen">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Hero onClickCTA={handleCTA} />
        </>
      )}
    </div>
  );
}
