import React from 'react';
import classes from './News.module.css';
import image1 from '../assets/image_not_available.png';

const News = (props) => {
  // console.log('title:', props.title);
  let title = props.title?.split('-')[0];
  let source = props.title?.split('-')[1];
  let fecha = new Date(props.date);
  const dateToshow = `${fecha.getDate()}-${
    fecha.getMonth() + 1
  }-${fecha.getFullYear()}`;

  return (
    <div className={classes['news-container']}>
      <hr />
      <div className={classes.innerContainer}>
        <h1 className={classes.title}>
          <a href={props.url} target="_blank">
            {title}
          </a>
        </h1>
        <div className={classes.new}>
          <img
            src={props.image ? props.image : image1}
            alt=""
            className={classes.contentImg}
          />
          <div className={classes.contentContainer}>
            <div className={classes.metaContainer}>
              <div className={classes.author}>
                <p className={classes.authorLabel}>
                  <strong>By:</strong>
                </p>
                <p>
                  <strong>
                    <span className={classes.authorTxt}>
                      {props.author
                        ? props.author?.toLowerCase()
                        : source?.toLowerCase()}
                    </span>
                  </strong>
                </p>
              </div>
              <p className={classes.date}>
                <strong>Fecha: {dateToshow}</strong>
              </p>
            </div>
            <div className={classes.txtContent}>
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
