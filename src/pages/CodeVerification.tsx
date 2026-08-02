export default function CodeVerification({
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
      <h2>Code de vérification</h2>

      <p>
        Un code à 6 chiffres a été envoyé à votre adresse e-mail.
      </p>

      <input
        type="text"
        maxLength={6}
        placeholder="123456"
      />

      <button onClick={onContinue}>
        Vérifier
      </button>

      <button>
        Renvoyer le code
      </button>
    </div>
  );
}
