import { Link } from 'react-router-dom';
import classes from './NewMd1.module.css';
import image1 from '../../assets/image_not_available.png';

const NewMd1 = ({ newItem, cat }) => {
  let title = newItem.title?.split('-')[0];
  let source = newItem.title?.split('-')[1];
  return (
    <div className={classes.container}>
      <img
        src={newItem.urlToImage ? newItem.urlToImage : image1}
        alt={title}
        className={classes.containerImg}
      />
      <h4 className={classes.containerH4}>{cat ? cat : 'Headlines'}</h4>
      <h2 className={classes.containerH2}>
        <Link to={newItem.url}>{title}</Link>
      </h2>
    </div>
  );
};

export default NewMd1;
