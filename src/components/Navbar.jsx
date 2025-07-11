import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        background: "linear-gradient(145deg, #fff 0%, #e6f7f7 50%, #ffecec 100%)",
      }}
    >
      <h1 style={{ fontWeight: "700", fontSize: "1.25rem" }}>
        CREW<span style={{ color: "#00c9a7" }}>up↑</span>
      </h1>
      <div>
        <button
          onClick={() => navigate("/auth")}
          style={{
            marginRight: "1rem",
            border: "none",
            background: "transparent",
            fontSize: "0.9rem",
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/auth")}
          style={{
            background: "#00c9a7",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            border: "none",
            fontSize: "0.9rem",
          }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
