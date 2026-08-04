export default function BookingSummary({
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
      <h2>Résumé de la réservation</h2>

      <p><strong>Laveur :</strong> Ahmed Benali</p>

      <p><strong>Véhicule :</strong> Voiture</p>

      <p><strong>Date :</strong> Aujourd'hui</p>

      <p><strong>Heure :</strong> 15:30</p>

      <p><strong>Adresse :</strong> Position actuelle</p>

      <p><strong>Prix :</strong> 120 DH</p>

      <button onClick={onContinue}>
        Continuer vers le laveur
      </button>
    </div>
  );
}
