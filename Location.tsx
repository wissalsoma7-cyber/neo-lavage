export default function Location() {
  return (
    <div
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
      <h2>Localisation</h2>

      <p>
        Autorisez Néo Lavage à accéder à votre position
        afin de trouver les laveurs proches de vous.
      </p>

      <button>Autoriser la localisation</button>

      <button>Plus tard</button>
    </div>
  );
}
