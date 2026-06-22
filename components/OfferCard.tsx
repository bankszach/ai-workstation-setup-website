type OfferCardProps = {
  title: string;
  body: string;
};

export function OfferCard({ title, body }: OfferCardProps) {
  return (
    <article className="offerCard">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
