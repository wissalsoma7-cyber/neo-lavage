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
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
        background: "#F4F9FF",
        gap: 20,
      }}
    >
      <h2>Code de vérification</h2>

      <input
        type="text"
        placeholder="123456"
        maxLength={6}
      />

      <button onClick={onContinue}>
        Vérifier
      </button>
    </div>
  );
}
