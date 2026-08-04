export default function Booking({
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
      <h2>Réservation</h2>

      <p>Choisissez la date de votre lavage.</p>

      <input
        type="date"
        style={{
          padding: 10,
          fontSize: 16,
        }}
      />

      <p>Choisissez l'heure.</p>

      <input
        type="time"
        style={{
          padding: 10,
          fontSize: 16,
        }}
      />

      <button onClick={onContinue}>
        Continuer
      </button>
    </div>
  );
}
