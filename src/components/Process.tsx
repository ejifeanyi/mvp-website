import { process as build } from '@/content';

export function Process() {
  return (
    <section className="section section--white" id="process" aria-labelledby="process-title">
      <div className="container">
        <h2 className="section-title" id="process-title">
          {build.title}
        </h2>
        <p className="lead">{build.intro}</p>

        <ol className="steps">
          {build.steps.map((s) => (
            <li className="step" key={s.label}>
              <span className={`bar bar--thin bar--${s.tone}`} aria-hidden="true" />
              <h3 className="step-label">{s.label}</h3>
              <p className="step-text">{s.text}</p>
              {s.payment ? (
                <p className="payment">
                  <span className="payment-share">{s.payment.share}</span>
                  <span className="payment-caption">{s.payment.caption}</span>
                </p>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="note">{build.note}</p>
      </div>
    </section>
  );
}
