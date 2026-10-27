import { Boundaries } from '@/components/Boundaries';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Packages } from '@/components/Packages';
import { Process } from '@/components/Process';
import { Proof } from '@/components/Proof';

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Proof />
        <Packages />
        <Process />
        <Boundaries />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
