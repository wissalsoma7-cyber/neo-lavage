export default function VehicleSelection({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F4F9FF",
        padding: 20,
        gap: 15,
      }}
    >
      <h2>Choisissez votre véhicule</h2>

      <button>🚗 Voiture</button>

      <button>🏍 Moto</button>

      <button>🚚 Camion</button>

      <button>🚐 Utilitaire</button>

      <button>🚲 Vélo</button>

      <button>🛻 Autre véhicule</button>

      <br />

      <button onClick={onContinue}>
        Continuer
      </button>
    </div>
  );
}
