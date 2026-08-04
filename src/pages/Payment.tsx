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
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
        background: "#F4F9FF",
        gap: 20,
      }}
    >
      <h2>Paiement</h2>

      <p><strong>Montant :</strong> 120 DH</p>

      <p>Choisissez votre mode de paiement.</p>

      <button>
        💳 Carte bancaire
      </button>

      <button>
        📱 Paiement mobile
      </button>

      <button>
        💵 Paiement en espèces
      </button>

      <button onClick={onContinue}>
        Valider le paiement
      </button>
    </div>
  );
}
