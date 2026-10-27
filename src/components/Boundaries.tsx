import { boundaries } from '@/content';
import { CheckIcon } from './CheckIcon';

export function Boundaries() {
  return (
    <section className="section" aria-labelledby="scope-title">
      <div className="container">
        <h2 className="section-title" id="scope-title">
          {boundaries.title}
        </h2>
        <div className="two-col">
          <div>
            <h3 className="card-title">{boundaries.included.title}</h3>
            <ul className="features features--plain">
              {boundaries.included.items.map((i) => (
                <li key={i}>
                  <CheckIcon />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="card-title">{boundaries.excluded.title}</h3>
            <ul className="rows">
              {boundaries.excluded.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
