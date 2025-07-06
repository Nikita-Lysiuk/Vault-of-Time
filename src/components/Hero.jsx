import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText, ScrollTrigger } from 'gsap/all';
import { DinoModel } from '@/components';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { useState, Suspense } from 'react';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines ' });

    heroSplit.chars.forEach(char => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      .to('.right-leaf', { y: 200 }, 0)
      .to('.left-leaf', { y: -200 }, 0);

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    ScrollTrigger.create({
      trigger: '#hero',
      start: startValue,
      end: endValue,
      scrub: true,
      onUpdate: self => {
        setScrollProgress(self.progress);
      },
    });
  }, []);

  return (
    <>
      <section id='hero' className='noisy'>
        <h1 className='title'>EPOCH</h1>

        <img
          src='/images/hero-left-leaf.png'
          alt='left-leaf'
          className='left-leaf'
        />

        <img
          src='/images/hero-right-leaf.png'
          alt='right-leaf'
          className='right-leaf'
        />

        <div className='body'>
          <div className='content'>
            <div className='space-y-5 hidden md:block'>
              <p>Bold. Thoughtful. Timeless</p>
              <p className='subtitle'>
                Step into the past <br /> one room at a time
              </p>
            </div>

            <div className='view-cocktails'>
              <p className='subtitle'>
                Every exhibit in our museum is a fusion of cultural depth,
                curatorial vision, and timeless stories — crafted to awaken your
                curiosity.
              </p>
              <a href='#cocktails'>View Exibition</a>
            </div>
          </div>
        </div>
      </section>

      <div className='video absolute inset-0'>
        <Canvas
          camera={{ position: [0, 0, 4], fov: 35 }}
          style={{ transform: `translateY(${scrollProgress * 100}vh)` }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
          <Suspense fallback={null}>
            <DinoModel scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Hero;
