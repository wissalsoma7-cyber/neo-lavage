export default function WasherList({
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
        padding: 20,
        background: "#F4F9FF",
        gap: 15,
      }}
    >
      <h2>Laveurs disponibles</h2>

      <button>Ahmed ⭐ 4.9 • 1,2 km</button>

      <button>Youssef ⭐ 4.8 • 2,5 km</button>

      <button>Karim ⭐ 4.7 • 3,8 km</button>

      <button onClick={onContinue}>
        Voir les détails
      </button>
    </div>
  );
}
