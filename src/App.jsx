import { Suspense, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import {
  Navbar,
  Hero,
  Exibitions,
  About,
  Craft,
  Menu,
  Contact,
} from '@/components';
import { useGLTF } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useEffect(() => {
    useGLTF.preload('/models/scene.gltf');
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Exibitions />
      <About />
      <Craft />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
