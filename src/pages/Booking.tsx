export default function Booking() {
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
      <h2>Réservation</h2>

      <p>
        Choisissez le type de véhicule, la date et l'heure
        du lavage.
      </p>

      <button>Choisir un véhicule</button>

      <button>Continuer</button>
    </div>
  );
}
