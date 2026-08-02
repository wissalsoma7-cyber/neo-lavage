export default function Notifications() {
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
      <h2>Notifications</h2>

      <p>
        Néo Lavage souhaite vous envoyer des notifications concernant vos réservations et l'arrivée du laveur.
      </p>

      <button>Autoriser</button>

      <button>Plus tard</button>
    </div>
  );
}
