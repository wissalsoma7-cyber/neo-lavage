export default function Confirmation() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4F9FF",
        padding: 20,
      }}
    >
      <h2>Réservation confirmée</h2>

      <p>
        Votre demande de lavage a été enregistrée avec succès.
      </p>

      <button>Retour à l'accueil</button>
    </div>
  );
}
