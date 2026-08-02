export default function VehicleSelection() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F4F9FF",
        padding: 20
      }}
    >
      <h2>Choisissez votre véhicule</h2>

      <button>Voiture</button>

      <button>Moto</button>

      <button>Camion</button>

      <button>Autre véhicule</button>
    </div>
  );
}
