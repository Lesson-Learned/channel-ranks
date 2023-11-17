import background1 from '@assets/home-background.jpg';
import background2 from '@assets/home-background-2.jpg';
import background3 from '@assets/home-background-3.jpg';
import { ReactNode, useEffect, useState } from 'react';
import css from './page-container.module.css';

const slides = [background1, background2, background3];

interface Props {
  children: ReactNode;
}

export function PageContainer({ children }: Props) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideIndex(slideIndex => {
        if (slideIndex === slides.length - 1) {
          return 0;
        } else {
          return slideIndex + 1;
        }
      });
    }, 8000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className={ css.container } style={{
      backgroundImage:
        `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(${ slides[slideIndex] })`
    }}>
      { children }
    </div>
  );
}
