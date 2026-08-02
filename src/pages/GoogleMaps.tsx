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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4F9FF",
        padding: 20,
      }}
    >
      <h2>Google Maps</h2>

      <p>
        Les laveurs disponibles autour de vous seront affichés ici.
      </p>

      <button onClick={onContinue}>
        Choisir un véhicule
      </button>
    </div>
  );
}
