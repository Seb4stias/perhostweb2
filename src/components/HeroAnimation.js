import React from 'react';
import { Player } from 'lottie-react';
import animationData from '../assets/hero.json';

export default function HeroAnimation() {
  // respect reduced motion
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    return <div style={{width:200,height:200,borderRadius:100,background:'linear-gradient(90deg,#b884ff,#9c6bff)'}} aria-hidden />;
  }

  return (
    <div style={{width:220,maxWidth:'48%',margin:'0 auto'}}>
      <Player autoplay loop animationData={animationData} style={{width:'100%'}} />
    </div>
  );
}
