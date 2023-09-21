import { Link } from 'react-router-dom';
import classes from './NewSmall1.module.css';
import image1 from '../../assets/image_not_available.png';

function formatDate(difference) {
  //Arrange the difference of date in days, hours, minutes, and seconds format
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  let duration = minutes + 'min';
  if (hours > 0) {
    duration = hours + 'h ' + minutes + ' min';
  }
  if (days > 0) {
    duration = days + 'd, ' + hours + 'hrs, ' + minutes + 'min';
  }
  return duration;
}

const NewSmall1 = ({ newItem, cat }) => {
  let title = newItem.title?.split('-')[0];
  let source = newItem.title?.split('-')[1];
  const publishedAt = new Date(newItem.publishedAt);
  const diff = Date.now() - publishedAt.getTime();
  const formatedDuration = formatDate(diff);

  // console.log('formatedDuration:', formatedDuration);
  return (
    <article className={classes.container}>
      <div className={classes.HeaderContainer}>
        <h4 className={classes.containerH4}>{cat ? cat : 'Headlines'}</h4>
        <h4>{formatedDuration}</h4>
      </div>

      <h2 className={classes.containerH2}>
        <Link to={newItem.url}>{title}</Link>
      </h2>
    </article>
  );
};

export default NewSmall1;
