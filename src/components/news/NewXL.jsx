import { Link } from 'react-router-dom';
import classes from './NewXL.module.css';
import image1 from '../../assets/image_not_available.png';

const NewXL = ({ newItem, cat }) => {
  let title = newItem.title?.split('-')[0];
  let source = newItem.title?.split('-')[1];
  return (
    <article className={classes.container}>
      <img
        src={newItem.urlToImage ? newItem.urlToImage : image1}
        alt={title}
        className={classes.containerImg}
      />
      <h2 className={classes.containerH2}>
        <Link to={newItem.url}>{title}</Link>
      </h2>
      <p className={classes.containerP}> {newItem.description} </p>
    </article>
  );
};

export default NewXL;
