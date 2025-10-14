import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Nse from './components/Nse';
import Planes from './components/Planes';
import Nosotros from './components/Nosotros';
import Contactanos from './components/Contactanos';
// import HeroAnimation from './components/HeroAnimation';

function App() {
  useEffect(() => {
    function onScroll() {
      const sc = window.scrollY || window.pageYOffset;
      // clamp and scale for subtle movement
      const v = Math.max(0, Math.min(1, sc / 1200));
      document.documentElement.style.setProperty('--scroll', v.toString());
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="App">
      <NavBar />
      <main>
        <section id="home" className="hero">
          <div style={{display:'flex',gap:24,alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
            <div style={{maxWidth:520}}>
              <h1>PerHost — Infraestructura para streamers profesionales</h1>
              <p className="lead">Servidor dedicado y soluciones de red (SRT / bonding) para streaming estable y profesional.</p>
            </div>
            <div style={{width:220,maxWidth:'48%',margin:'0 auto', background:'linear-gradient(90deg,#b884ff,#9c6bff)', borderRadius:100, height:200}}></div>
          </div>
        </section>

        <Nse />
        <Planes />
        <Nosotros />
        <Contactanos />
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} PerHost — Todos los derechos reservados</footer>
    </div>
  );
}

export default App;
