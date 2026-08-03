export default function WasherDetails({
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
      <h2>Profil du laveur</h2>

      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "#D9D9D9",
          alignSelf: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Photo
      </div>

      <p><strong>Nom :</strong> Ahmed Benali</p>

      <p><strong>Note :</strong> ⭐ 4.9 / 5</p>

      <p><strong>Téléphone :</strong> +212 6 12 34 56 78</p>

      <p><strong>WhatsApp :</strong> Disponible</p>

      <p><strong>Déplacement :</strong> Triporteur</p>

      <p><strong>Matériel :</strong> Fourni par le laveur</p>

      <p><strong>Temps estimé :</strong> 12 minutes</p>

      <p><strong>Prix :</strong> 120 DH</p>

      <button>
        📞 Appeler
      </button>

      <button>
        💬 WhatsApp
      </button>

      <button onClick={onContinue}>
        Choisir ce laveur
      </button>
    </div>
  );
}
