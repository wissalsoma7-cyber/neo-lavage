export default function EmailLogin({
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
      <h2>Connexion par e-mail</h2>

      <input
        type="email"
        placeholder="Votre adresse e-mail"
      />

      <button onClick={onContinue}>
        Recevoir le code
      </button>
    </div>
  );
}
