import React from 'react';

import { Navbar13 } from '@/components/navbar-13';
import { Header30 } from '@/components/header-30';
import { Layout366 } from '@/components/layout-366';
import { Layout415 } from '@/components/layout-415';
import { Pricing17 } from '@/components/pricing-17';
import { Contact5 } from '@/components/contact-5';
import { Footer4 } from '@/components/footer-4';

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10">
        <Navbar13 />
      </header>
      <main>
        <div className="h-screen">
          <Header30 />
        </div>
        <Layout366 />
        <Layout415 />
        <Pricing17 />
        <Contact5 />
        <Footer4 />
      </main>
    </>
  );
}
