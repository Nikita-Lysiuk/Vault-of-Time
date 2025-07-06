import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', {
      type: 'words',
    });

    const scrolltimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
      },
    });

    scrolltimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: 'expo.out',
        stagger: 0.02,
      })
      .from('.top-grid div, .bottom-grid div', {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,
      });
  });

  return (
    <div id='about'>
      <div className='mb-16 md:px-0 px-5'>
        <div className='content'>
          <div className='md:col-span-8'>
            <p className='badge'>Best Exibitions</p>
            <h2>
              Where every detail matters <span className='tetx-white'>-</span>{' '}
              from a brushstroke to the whole story
            </h2>
          </div>

          <div className='sub-content'>
            <p>
              Every exhibit we craft is a reflection of our obsession with
              detail — from the faintest pigment to the final spotlight. That
              care is what transforms a simple display into an unforgettable
              experience.
            </p>
            <div className='flex items-s gap-6'>
              {/* Внутрішня секція з рейтингом */}
              <div className='flex flex-row'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width='1em'
                    height='1em'
                    viewBox='0 0 20 20'
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    style={{ fontSize: '1.5em' }}
                  >
                    <path d='M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L4.82 19z' />
                  </svg>
                ))}
              </div>
              <p className='md:text-3xl text-xl font-bold'>
                <span>4.5</span>/5
              </p>
              <p className='text-sm text-white-100'>
                More than +12000 visitors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='top-grid'>
        <div className='md:col-span-3'>
          <div className='noisy' />
          <img src='/images/picture-1.jpg' alt='grid-img-1' />
        </div>

        <div className='md:col-span-6'>
          <div className='noisy' />
          <img src='/images/picture-2.jpg' alt='grid-img-2' />
        </div>

        <div className='md:col-span-3'>
          <div className='noisy' />
          <img src='/images/picture-5.jpg' alt='grid-img-5' />
        </div>
      </div>

      <div className='bottom-grid'>
        <div className='md:col-span-8'>
          <div className='noisy' />
          <img src='/images/picture-3.jpg' alt='grid-img-3' />
        </div>

        <div className='md:col-span-4'>
          <div className='noisy' />
          <img src='/images/picture-4.jpg' alt='grid-img-4' />
        </div>
      </div>
    </div>
  );
};

export default About;
