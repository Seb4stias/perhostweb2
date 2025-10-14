# TODO: Corregir error en HeroAnimation

- [x] Editar perhostingwebs/src/components/HeroAnimation.js:
  - Cambiar `const animationData = require('../assets/hero.json');` a `import animationData from '../assets/hero.json';`.
  - Cambiar `<Player autoplay loop src={animationData} style={{width:'100%'}} />` a `<Player autoplay loop animationData={animationData} style={{width:'100%'}} />`.
  - Remover la importación no utilizada `Suspense`.
- [x] Ejecutar `npm start` para verificar que el error se haya corregido.
