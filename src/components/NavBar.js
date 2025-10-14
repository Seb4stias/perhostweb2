import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const navVariant = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.2,0.9,0.2,1] } }
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.nav className="nav" initial="hidden" animate="visible" variants={navVariant}>
      <div className="nav-inner">
        <motion.div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <motion.img src={logo} alt="PerHost" width={36} height={36} whileHover={{ scale: 1.08 }} animate={{ rotate: [0,2,0,-2,0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} />
          <motion.div className="brand" whileHover={{ scale: 1.03 }}>{'PerHost'}</motion.div>
        </motion.div>

        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#nse">Qué hacemos</a></li>
          <li><a href="#planes">Planes</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contactanos">Contáctanos</a></li>
        </ul>

        {/* Mobile hamburger */}
        <button className="hamburger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(v => !v)} ref={btnRef}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <AnimatePresence>
          {open && (
            <motion.aside className="mobile-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
              <nav className="mobile-nav">
                <ul>
                  <li><a href="#home" onClick={() => setOpen(false)}>Inicio</a></li>
                  <li><a href="#nse" onClick={() => setOpen(false)}>Qué hacemos</a></li>
                  <li><a href="#planes" onClick={() => setOpen(false)}>Planes</a></li>
                  <li><a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a></li>
                  <li><a href="#contactanos" onClick={() => setOpen(false)}>Contáctanos</a></li>
                </ul>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
