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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4F9FF",
        padding: 20,
        gap: 15,
      }}
    >
      <h2>Suivi du laveur</h2>

      <div
        style={{
          width: "100%",
          maxWidth: 350,
          height: 250,
          border: "2px solid #0A84FF",
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Carte Google Maps
      </div>

      <p>🚗 Le laveur est en route.</p>

      <p>⏱ Temps estimé : 12 minutes</p>

      <button>📞 Appeler</button>

      <button>💬 WhatsApp</button>

      <button onClick={onContinue}>
        Le lavage est terminé
      </button>
    </div>
  );
}
