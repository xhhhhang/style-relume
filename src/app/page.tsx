'use client'

import React from 'react';
import { motion } from 'framer-motion';

import { Navbar13 } from '@/components/navbar-13';
import { Header30 } from '@/components/header-30';
import { Layout366 } from '@/components/layout-366';
import { Layout415 } from '@/components/layout-415';
import { Pricing17 } from '@/components/pricing-17';
import { Contact5 } from '@/components/contact-5';
import { Footer4 } from '@/components/footer-4';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  console.log('Home component rendered');
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10">
        <Navbar13 />
      </header>
      <main>
        <div className="h-screen">
          <Header30 />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <Layout366 />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <Layout415 />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <Pricing17 />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <Contact5 />
        </motion.div>
        <Footer4 />
      </main>
    </div>
  );
}
