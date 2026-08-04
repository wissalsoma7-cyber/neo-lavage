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
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
        background: "#F4F9FF",
        gap: 20,
      }}
    >
      <h2>Cookies</h2>

      <p>
        Nous utilisons des cookies pour améliorer votre expérience sur Néo Lavage.
      </p>

      <button onClick={onContinue}>
        Accepter
      </button>
    </div>
  );
}
