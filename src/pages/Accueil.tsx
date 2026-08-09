type Props = {
  onGoogle: () => void;
  onApple: () => void;
  onEmail: () => void;
  onAdmin: () => void;
};

export default function Home({
  onGoogle,
  onApple,
  onEmail,
  onAdmin,
}: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        background: "#F5F9FF",
        fontFamily: "Arial, sans-serif",
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
      <button onClick={onAdmin}>
  Continuer en tant qu'administrateur
</button>
    </div>
  );
}
