import { site } from '@/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          {site.name}, {site.role}
        </p>
        <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
          {site.linkedinLabel}
        </a>
      </div>
    </footer>
  );
}
