import React from 'react';
import { motion } from 'framer-motion';

const listVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export default function Contactanos() {
  return (
    <motion.section id="contactanos" className="section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="container">
        <h2>Contáctanos</h2>
        <p className="lead">Síguenos en nuestras redes o envíanos un mensaje para consultas pre-venta.</p>

        <motion.ul className="social-list" variants={listVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.li variants={item}>Twitter: <a href="https://twitter.com/PerHost" target="_blank" rel="noopener noreferrer">@PerHost</a></motion.li>
          <motion.li variants={item}>Instagram: <a href="https://instagram.com/PerHost" target="_blank" rel="noopener noreferrer">@PerHost</a></motion.li>
          <motion.li variants={item}>Twitch: <a href="https://twitch.tv/PerHost" target="_blank" rel="noopener noreferrer">/PerHost</a></motion.li>
          <motion.li variants={item}>Email: <a href="mailto:contacto@perhost.example">contacto@perhost.example</a></motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
}
