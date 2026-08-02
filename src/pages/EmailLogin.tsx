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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4F9FF",
        padding: 20,
      }}
    >
      <h2>Connexion par e-mail</h2>

      <input
        type="email"
        placeholder="Votre adresse e-mail"
      />

      <button onClick={onContinue}>
        Recevoir un code
      </button>
    </div>
  );
}
