import React from 'react';
import plans from '../data/plans';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.2,0.9,0.2,1] } }
};

export default function Planes() {
  return (
    <motion.section id="planes" className="section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="container">
        <h2>Planes</h2>
        <p className="lead">Elige el plan que mejor se adapte a tus necesidades de streaming. Todos los planes incluyen soporte técnico especializado.</p>

        <motion.div className="plans-grid" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {plans.map(plan => (
            <motion.article key={plan.id} className="plan-card" variants={item} whileHover={{ scale: 1.02 }}>
              <header>
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
              </header>
              <ul>
                <li><strong>Calidad:</strong> {plan.quality}</li>
                <li><strong>FPS:</strong> {plan.fps}</li>
                <li><strong>Bitrate:</strong> {plan.bitrate}</li>
                <li><strong>Disponibilidad:</strong> {plan.availability}</li>
                <li><strong>Prueba:</strong> {plan.trial}</li>
                <li><strong>IA:</strong> {plan.ai ? 'Sí' : 'No'}</li>
              </ul>
              <p className="desc">{plan.description}</p>
              <button className="btn-primary">Contratar</button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
