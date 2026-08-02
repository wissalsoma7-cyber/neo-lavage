export default function 
  Home({ onGoogle }: { onGoogle: () => 
                      void}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F4F9FF",
        padding: 20
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0A84FF"
        }}
      >
        NÉO LAVAGE
      </h1>

      <button onClick={onGoogle}>
  Continuer avec Google
</button>

      <button>Continuer avec Apple</button>

      <button>Essayer sans e-mail</button>

      <button>Partager Néo Lavage</button>
    </div>
  );
}
