export default function AppleLogin({
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
      <h2>Connexion Apple</h2>

      <p>Sélectionnez votre compte Apple.</p>

      <button onClick={onContinue}>
        Continuer
      </button>
    </div>
  );
}
