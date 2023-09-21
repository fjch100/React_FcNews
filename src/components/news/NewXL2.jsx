import { Link } from 'react-router-dom';
import classes from './NewXL2.module.css';
import image1 from '../../assets/image_not_available.png';

const NewXL2 = ({ newItem, cat }) => {
  // console.log(newItem);
  let title = newItem.title?.split('-')[0];
  let source = newItem.title?.split('-')[1];
  return (
    <article className={classes.container}>
      <img
        src={newItem.urlToImage ? newItem.urlToImage : image1}
        alt={title}
        className={classes.containerImg}
      />
      <div className={classes.infoContainer}>
        <span className={classes.span}>
          <Link to={newItem.url}>{cat ? cat : 'Headlines'}</Link>
        </span>
        <p className={classes.containerP}>
          <Link to={newItem.url}>{newItem.description}</Link>
        </p>
      </div>
    </article>
  );
};

export default NewXL2;
