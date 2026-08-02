export default function WasherProfile() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4F9FF",
        padding: 20
      }}
    >
      <h2>Profil du laveur</h2>

      <p>Informations du laveur sélectionné.</p>

      <button>Appeler</button>

      <button>WhatsApp</button>

      <button>Continuer</button>
    </div>
  );
}
