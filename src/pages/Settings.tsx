export default function Settings() {
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
      <h2>Paramètres</h2>

      <button>Mon compte</button>

      <button>Notifications</button>

      <button>Déconnexion</button>
    </div>
  );
}
