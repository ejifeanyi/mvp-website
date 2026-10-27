import { finalCta, site } from '@/content';
import { Button } from './Button';

export function FinalCta() {
  return (
    <section className="band band--cobalt final" id="book" aria-labelledby="book-title">
      <div className="container">
        <h2 className="display" id="book-title">
          {finalCta.title}
        </h2>
        <p className="lead lead--on-dark">{finalCta.text}</p>
        <div className="actions">
          <Button variant="inverse" />
          <a className="text-link text-link--on-dark" href={site.calendarUrl} target="_blank" rel="noopener noreferrer">
            {site.calendarLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
