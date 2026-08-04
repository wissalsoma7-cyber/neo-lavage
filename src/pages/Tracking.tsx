export default function Tracking({
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
        gap: 20,
      }}
    >
      <h2>Suivi du laveur</h2>

      <p>Le laveur est en route.</p>

      <p>Temps estimé : 12 minutes.</p>

      <p>Distance restante : 2,4 km.</p>

      <button onClick={onContinue}>
        Mission terminée
      </button>
    </div>
  );
}
