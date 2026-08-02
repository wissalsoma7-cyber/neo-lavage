export default function Cookies({
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
      <h2>Cookies</h2>

      <p>
        Néo Lavage utilise des cookies pour améliorer votre expérience.
      </p>

      <button onClick={onContinue}>
        Accepter
      </button>

      <button>Refuser</button>
    </div>
  );
}
