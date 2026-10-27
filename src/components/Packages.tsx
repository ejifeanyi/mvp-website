import { packages } from '@/content';
import { Button } from './Button';
import { CheckIcon } from './CheckIcon';

export function Packages() {
  return (
    <section className="section" id="packages" aria-labelledby="packages-title">
      <div className="container">
        <h2 className="section-title" id="packages-title">
          {packages.title}
        </h2>
        <p className="lead">{packages.intro}</p>

        <div className="package-grid">
          {packages.items.map((p) => (
            <article className={`card ${p.dark ? 'card--dark' : 'card--light'}`} key={p.name}>
              <h3 className="card-title">{p.name}</h3>
              <p className="price">
                <span className="price-amount">{p.price}</span>
                <span className="price-meta">{p.meta}</span>
              </p>
              <p className="card-for">{p.forWho}</p>
              <hr className="card-rule" />
              {p.lead ? <p className="card-lead">{p.lead}</p> : null}
              <ul className="features">
                {p.features.map((f) => (
                  <li key={f}>
                    <CheckIcon dark={p.dark} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="card-action">
                <Button />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
