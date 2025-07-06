import { goodLists, featureLists } from '@constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Craft = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to('.will-fade', {
        opacity: 0,
        stagger: 0.2,
        ease: 'power1.inOut',
      })
      .to('.masked-img', {
        scale: 1.3,
        maskPosition: 'center',
        maskSize: '400%',
        duration: 1,
        ease: 'power1.in',
      })
      .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  });

  return (
    <div id='art'>
      <div className='container mx-auto h-full pt-20'>
        <h2 className='will-fade'>The Craft</h2>

        <div className='content'>
          <ul className='space-y-4 will-fade'>
            {goodLists.map((feature, index) => (
              <li key={index} className='flex items-center gap-2'>
                <img src='/images/check.png' alt='check' />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className='cocktail-img'>
            <img
              src='/images/under-img-1.jpg'
              alt='exibit'
              className='abs-center masked-img size-full object-contain'
            />
          </div>

          <ul className='space-y-4 will-fade'>
            {featureLists.map((feature, index) => (
              <li
                key={index}
                className='flex items-center justify-center gap-2'
              >
                <img src='/images/check.png' alt='check' />
                <p className='md:w-fit w-60'>{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='masked-container'>
          <h2 className='will-fade'>Curated to Inspire</h2>
          <div id='masked-content'>
            <h3>Crafted Exhibits, Timeless Stories</h3>
            <p>
              This isn’t just a gallery. It’s a carefully composed journey —
              where every piece invites you to pause, reflect, and connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
