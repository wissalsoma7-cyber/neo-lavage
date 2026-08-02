export default function GoogleLogin({
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
      <h2>Connexion Google</h2>

      <button>Choisir un compte Google</button>

      <button>Utiliser un autre compte</button>

      <button>Annuler</button>

      <button onClick={onContinue}>
        Continuer
      </button>
    </div>
  );
}
