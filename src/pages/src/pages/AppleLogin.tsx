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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4F9FF",
        padding: 20,
      }}
    >
      <h2>Connexion Apple</h2>

      <button>Choisir un compte Apple</button>

      <button>Utiliser un autre compte</button>

      <button>Annuler</button>

      <button onClick={onContinue}>
        Continuer
      </button>
    </div>
  );
}
