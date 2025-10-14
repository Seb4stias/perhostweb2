import React from 'react';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2,0.9,0.2,1] } }
};

export default function Nse() {
  return (
    <motion.section id="nse" className="section dark" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
      <div className="container">
        <h2>Qué hacemos</h2>
        <p className="lead">PerHost ofrece infraestructura de hosting optimizada para creadores de contenido y streamers profesionales. Nos enfocamos en entregar servidores dedicados y soluciones de estabilidad de red para eliminar interrupciones y problemas técnicos durante transmisiones en vivo.</p>

        <h3>Servicios principales</h3>
        <ul>
          <li><strong>Servidor Dedicado para Streaming:</strong> Recursos exclusivos (CPU, RAM, ancho de banda) optimizados para codificación y transmisión en tiempo real. Control total del entorno y escalabilidad.</li>
          <li><strong>Servicio de Estabilidad de Red (SRTLA):</strong> Uso de SRT y bonding de conexiones (fibra, 5G, etc.) para mantener el stream activo aun si alguna conexión falla.</li>
        </ul>

        <h3>Por qué elegirnos</h3>
        <p>Nos especializamos en streamers serios que necesitan una infraestructura confiable para profesionalizar su contenido. Nuestro enfoque es técnico y práctico: reducimos la latencia, evitamos pérdidas de frames y garantizamos continuidad del streaming.</p>
      </div>
    </motion.section>
  );
}
