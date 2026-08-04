export default function GoogleMaps({
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
        padding: 20,
        background: "#F4F9FF",
        gap: 20,
      }}
    >
      <h2>Google Maps</h2>

      <div
        style={{
          flex: 1,
          background: "#D9D9D9",
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 22,
        }}
      >
        🗺️ Carte Google Maps
      </div>

      <button onClick={onContinue}>
        Voir les laveurs disponibles
      </button>
    </div>
  );
}
