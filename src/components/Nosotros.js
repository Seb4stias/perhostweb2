import React from 'react';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2,0.9,0.2,1] } }
};

export default function Nosotros() {
  return (
    <motion.section id="nosotros" className="section dark" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
      <div className="container">
        <h2>Nosotros</h2>
        <p className="lead">PerHost es un proveedor de soluciones de hosting de alto rendimiento, especializado en creadores de contenido y streamers profesionales. Nuestro objetivo es brindar una infraestructura robusta y confiable que permita a los creadores centrarse en su contenido sin preocuparse por problemas técnicos.</p>

        <h3>Misión</h3>
        <p>Ofrecer servicios de hosting y retransmisión optimizados para streaming en vivo, con foco en la estabilidad de red, rendimiento y soporte técnico en español.</p>

        <h3>Valores</h3>
        <ul>
          <li>Rendimiento y fiabilidad</li>
          <li>Soporte técnico especializado</li>
          <li>Transparencia y servicio al cliente</li>
        </ul>
      </div>
    </motion.section>
  );
}
