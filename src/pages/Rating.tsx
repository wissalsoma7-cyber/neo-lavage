export default function Rating({
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
        gap: 15,
      }}
    >
      <h2>Évaluez votre lavage</h2>

      <p>Votre avis nous aide à améliorer le service.</p>

      <button>⭐⭐⭐⭐⭐</button>

      <textarea
        placeholder="Laissez un commentaire (facultatif)"
      />

      <button onClick={onContinue}>
        Envoyer mon avis
      </button>
    </div>
  );
}
