import { proof } from '@/content';

export function Proof() {
  return (
    <section className="band band--ink proof" aria-label="Recent work">
      <div className="container">
        <p className="section-title proof-title">{proof.title}</p>
        <p className="lead lead--on-dark">{proof.note}</p>
      </div>
    </section>
  );
}
