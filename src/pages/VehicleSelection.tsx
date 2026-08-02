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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4F9FF",
        padding: 20,
      }}
    >
      <h2>Choisissez votre véhicule</h2>

      <button>Voiture</button>

      <button>Moto</button>

      <button>Camion</button>

      <button>Autre véhicule</button>

      <button onClick={onContinue}>
        Continuer
      </button>
    </div>
  );
}
