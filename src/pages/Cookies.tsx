export default function Cookies({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Cookies</h2>

      <p>
        Acceptez les cookies pour améliorer votre expérience.
      </p>

      <button onClick={onContinue}>
        Accepter
      </button>
    </div>
  );
}
