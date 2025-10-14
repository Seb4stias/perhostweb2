const plans = [
  {
    id: 1,
    name: '720p 30 FPS',
    price: '$35,000',
    bitrate: '3000 kbps',
    fps: 30,
    quality: '720p',
    availability: 'inmediata',
    trial: '2 semanas',
    ai: false,
    description: 'Ideal para transmisiones básicas o clases en línea. Buena calidad con bajo consumo de ancho de banda.'
  },
  {
    id: 2,
    name: '720p 60 FPS',
    price: '$39,000',
    bitrate: '3500 kbps',
    fps: 60,
    quality: '720p',
    availability: 'inmediata',
    trial: '2 semanas',
    ai: false,
    description: 'Imagen más fluida manteniendo buena eficiencia de datos. Buena opción para streamers que buscan suavidad.'
  },
  {
    id: 3,
    name: '720p 60 FPS (IA)',
    price: '$43,000',
    bitrate: '3500 kbps',
    fps: 60,
    quality: '720p',
    availability: 'próximamente',
    trial: 'n/a',
    ai: true,
    description: 'Versión con IA para optimizar imagen y reducir ruido. En fase de lanzamiento.'
  },
  {
    id: 4,
    name: '1080p 30 FPS',
    price: '$45,000',
    bitrate: '4500 kbps',
    fps: 30,
    quality: '1080p',
    availability: 'inmediata',
    trial: '2 semanas',
    ai: false,
    description: 'Full HD para transmisiones más nítidas, ideal para creadores que priorizan calidad visual.'
  },
  {
    id: 5,
    name: '1080p 60 FPS',
    price: '$55,000',
    bitrate: '6000 kbps',
    fps: 60,
    quality: '1080p',
    availability: 'inmediata',
    trial: '2 semanas',
    ai: false,
    description: 'Excelente equilibrio entre calidad profesional y fluidez. Requiere mayor bitrate.'
  },
  {
    id: 6,
    name: '1080p 60 FPS (IA)',
    price: '$65,000',
    bitrate: '6000 kbps',
    fps: 60,
    quality: '1080p',
    availability: 'próximamente',
    trial: 'n/a',
    ai: true,
    description: 'Opción premium con IA para mejorar imagen y ajustes automáticos. Próximamente.'
  }
];

export default plans;
