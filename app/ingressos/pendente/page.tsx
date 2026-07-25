export default function Pendente() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <span className="sheet-label">PAGAMENTO EM ANÁLISE</span>
      <h1 className="font-display text-5xl mt-4">Estamos confirmando seu pagamento</h1>
      <p className="mt-6 text-muted">
        Isso pode acontecer com algumas formas de pagamento. Assim que for aprovado,
        você recebe a confirmação por e-mail.
      </p>
    </div>
  );
}