export default function Location({
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
      <h2>Localisation</h2>

      <p>
        Autorisez l'accès à votre position afin de trouver les laveurs proches de vous.
      </p>

      <button onClick={onContinue}>
        Autoriser la localisation
      </button>
    </div>
  );
}
