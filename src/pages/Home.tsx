 {export default function Home({
  onGoogle,
  onApple,
  onEmail,
}: {
  onGoogle: () => void;
  onApple: () => void;
  onEmail: () => void;
})
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F4F9FF",
        padding: 24,
      }}
    >
      <h1 style={{ color: "#0A84FF" }}>
        NÉO LAVAGE
      </h1>

      <p>
        Le lavage de véhicules à domicile
      </p>

      <br />

      <button onClick={onGoogle}>
        Continuer avec Google
      </button>

      <br />

      <button onClick={onApple}>
        Continuer avec Apple
      </button>

      <br />

      <button onClick={onEmail}>
  Continuer avec votre adresse e-mail
      </button>

      <br />

      <p>
        Vous avez déjà un compte ?
      </p>

      <button>
        Se connecter
      </button>

      <br />

      <small style={{ textAlign: "center" }}>
        En continuant, vous acceptez les Conditions d'utilisation
        et la Politique de confidentialité.
      </small>
    </div>
  );
}
