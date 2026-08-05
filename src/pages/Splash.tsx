export default function Splash({
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
        background: "#0A84FF",
        color: "white",
      }}
    >
      <h1>Néo Lavage</h1>

      <p>Votre partenaire de lavage intelligent.</p>

      <button
        onClick={onContinue}
        style={{
          marginTop: 30,
          padding: 12,
          fontSize: 18,
        }}
      >
        Commencer
      </button>
    </div>
  );
}
