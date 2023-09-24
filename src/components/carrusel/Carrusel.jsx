import { useEffect } from 'react';
import { useState } from 'react';
import classes from './Carrusel.module.css';

function Carrusel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  // console.log(current);

  return (
    <div
      className={classes.carrusel}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className={classes.carruselWrapper}>
        {images.map((image, index) => {
          let carruselCardClass =
            index == current
              ? `${classes.carruselCard} ${classes.carruselCardActive}`
              : classes.carruselCard;
          return (
            /* (condition) ? true : false */

            <div key={index} className={carruselCardClass}>
              <a href={image.url} target="blank">
                <img className={classes.cardImage} src={image.image} alt="" />
                <div className={classes.cardOverlay}>
                  <h2 className={classes.cardTitle}>{image.title}</h2>
                </div>
              </a>
            </div>
          );
        })}
        <div className={classes.carruselArrowLeft} onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className={classes.carruselArrowRight} onClick={slideRight}>
          &rsaquo;
        </div>
        <div className={classes.carrouselPagination}>
          {images.map((_, index) => {
            let paginationClass =
              index == current
                ? `${classes.paginationDot} ${classes.paginationDotActive}`
                : classes.paginationDot;
            return (
              <div
                key={index}
                className={paginationClass}
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
