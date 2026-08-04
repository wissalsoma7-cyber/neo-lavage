export default function Notifications({
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
      <h2>Notifications</h2>

      <p>
        Autorisez Néo Lavage à vous envoyer des notifications concernant vos réservations.
      </p>

      <button onClick={onContinue}>
        Autoriser
      </button>
    </div>
  );
}
