import { exibitLists } from '@constants';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      '.cocktail img',
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      '.details h2',
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 100,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      '.details p',
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 100,
        ease: 'power1.inOut',
      }
    );
  }, [currentIndex]);

  const totalExibits = exibitLists.length;

  const goToSlide = index => {
    const newIndex = (index + totalExibits) % totalExibits;

    setCurrentIndex(newIndex);
  };

  const getExhibitAt = indexOffset => {
    return exibitLists[
      (currentIndex + indexOffset + totalExibits) % totalExibits
    ];
  };

  const currentExhibit = getExhibitAt(0);
  const prevExhibit = getExhibitAt(-1);
  const nextExhibit = getExhibitAt(1);

  return (
    <section
      id='menu'
      aria-labelledby='menu-heading'
      className='overflow-hidden'
    >
      <img
        src='/images/slider-left-leaf.png'
        alt='left-leaf'
        id='m-left-leaf'
      />
      <img
        src='/images/slider-right-leaf.png'
        alt='right-leaf'
        id='m-right-leaf'
      />

      <h2 id='menu-heading' className='sr-only'>
        Exhibition Highlights
      </h2>

      <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
        {exibitLists.map((exibit, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={exibit.id}
              className={`${
                isActive ? 'text-white' : 'text-white/50 border-white/50'
              }`}
              onClick={() => goToSlide(index)}
            >
              {exibit.name}
            </button>
          );
        })}
      </nav>

      <div className='content'>
        <div className='arrows'>
          <button
            className='text-left'
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevExhibit.name}</span>
            <img
              src='/images/right-arrow.png'
              alt='right-arrow'
              aria-hidden='true'
            />
          </button>

          <button
            className='text-right'
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextExhibit.name}</span>
            <img
              src='/images/left-arrow.png'
              alt='left-arrow'
              aria-hidden='true'
            />
          </button>
        </div>

        <div className='cocktail'>
          <img src={currentExhibit.image} className='object-contain' />
        </div>

        <div className='recipe'>
          <div ref={contentRef} className='info'>
            <p>Recipe for:</p>
            <p id='title'>{currentExhibit.name}</p>
          </div>

          <div className='details'>
            <h2>{currentExhibit.title}</h2>
            <p>{currentExhibit.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
