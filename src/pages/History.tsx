export default function History({
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
      <h2>Historique</h2>

      <p>15/08/2026 - Lavage Voiture - 120 DH</p>

      <p>10/08/2026 - Lavage SUV - 150 DH</p>

      <p>02/08/2026 - Lavage Moto - 60 DH</p>

      <button onClick={onContinue}>
        Donner une évaluation
      </button>
    </div>
  );
}
