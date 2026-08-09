import React from "react";
import { useState } from "react";

  export default function App() {
  const [page, setPage] = useState<"start" 
    | "home">("start");

  if (page === "home") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Accueil Néo Lavage
      </div>
    );
  }

  return (
  
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        background: "#F4F9FF",
      }}
    >
      <h1>Néo Lavage</h1>

      <p>Le projet est en cours de reconstruction.</p>

      <button
  onClick={() => setPage("home")}
  style={{
    padding: "12px 24px",
    borderRadius: 10,
    border: "none",
    background: "#1976D2",
    color: "white",
    fontSize: 16,
    cursor: "pointer",
  }}
>
  Commencer
</button>
    </div>
  );
}
