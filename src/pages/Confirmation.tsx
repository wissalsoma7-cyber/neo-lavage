export default function Confirmation({
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
      <h2>Réservation confirmée</h2>

      <p>
        Votre réservation a été enregistrée avec succès.
      </p>

      <p>
        Un laveur est en route vers votre position.
      </p>

      <p>
        Vous pouvez suivre son déplacement en temps réel.
      </p>

      <button onClick={onContinue}>
        Suivre le laveur
      </button>
    </div>
  );
}
