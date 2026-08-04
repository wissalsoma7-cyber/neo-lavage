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
        padding: 20,
        background: "#F4F9FF",
        gap: 15,
      }}
    >
      <h2>Choisissez votre véhicule</h2>

      <button>🚗 Voiture</button>

      <button>🚙 SUV</button>

      <button>🏍 Moto</button>

      <button>🚐 Utilitaire</button>

      <button onClick={onContinue}>
        Continuer
      </button>
    </div>
  );
}
