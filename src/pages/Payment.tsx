export default function Payment({
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
      <h2>Paiement sécurisé</h2>

      <input
        type="text"
        placeholder="Nom du titulaire"
      />

      <input
        type="text"
        placeholder="Numéro de carte"
      />

      <input
        type="text"
        placeholder="MM/AA"
      />

      <input
        type="password"
        placeholder="CVV"
      />

      <button onClick={onContinue}>
        Payer maintenant
      </button>
    </div>
  );
}
