export default function Home({
  onGoogle,
  onApple,
  onEmail,
}: {
  onGoogle: () => void;
  onApple: () => void;
  onEmail: () => void;
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
        gap: 15,
      }}
    >
      <h1>Néo Lavage</h1>

      <button onClick={onGoogle}>
        Continuer avec Google
      </button>

      <button onClick={onApple}>
        Continuer avec Apple
      </button>

      <button onClick={onEmail}>
        Continuer avec votre adresse e-mail
      </button>
    </div>
  );
}
