export default function History({
  onContinue,
}: {
  onContinue: () => void;
})
  <button onClick={onContinue}>
  Évaluer ce lavage
</button>
    {<div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F4F9FF",
        padding: 20
      }}
    >
      <h2>Historique</h2>

      <p>Vos réservations apparaîtront ici.</p>

      <button>Retour</button>
    </div>
  );
}
