import { site } from '@/content';

type Props = { variant?: 'primary' | 'inverse'; label?: string };

// Every call to action opens the booking page. The hidden text tells screen reader users it opens a new tab.
export function Button({ variant = 'primary', label = site.ctaLabel }: Props) {
  return (
    <a className={`btn btn--${variant}`} href={site.calendarUrl} target="_blank" rel="noopener noreferrer">
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
