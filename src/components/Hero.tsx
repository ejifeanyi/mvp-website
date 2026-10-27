import { hero } from '@/content';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <h1 className="display" id="hero-title">
          {hero.titleLines.map((line) => (
            <span className="display-line" key={line}>
              {line}
            </span>
          ))}
        </h1>
        <p className="lead">{hero.intro}</p>
        <div className="actions">
          <Button />
          <a className="text-link" href="#packages">
            {hero.secondaryLabel}
          </a>
        </div>

        <ol className="weeks" aria-label="The first four weeks">
          {hero.weeks.map((w) => (
            <li className="week" key={w.label}>
              <span className={`bar bar--${w.tone}`} aria-hidden="true" />
              <span className="week-label">{w.label}</span>
              <span className="week-text">{w.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
