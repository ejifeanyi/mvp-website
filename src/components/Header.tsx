import { site } from '@/content';
import { Button } from './Button';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top">
          {site.name}
        </a>
        <nav className="nav" aria-label="Main">
          <a className="nav-link" href="#packages">
            Packages
          </a>
          <a className="nav-link" href="#process">
            How a build runs
          </a>
          <Button />
        </nav>
      </div>
    </header>
  );
}
