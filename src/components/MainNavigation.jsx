import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const initialMenu = [
  {
    id: 'headlineNewsId',
    title: 'Headlines',
    link: '/',
    selected: true,
    collection: 'Headlines'
  },
  {
    id: 'businessNewsId',
    title: 'Business',
    link: '/Business',
    selected: false,
    collection: 'Business'
  },
  {
    id: 'technologyNewsId',
    title: 'Technology',
    link: '/Technology',
    selected: false,
    collection: 'Technology'
  },
  {
    id: 'scienceNewsId',
    title: 'Science',
    link: '/Science',
    selected: false,
    collection: 'Science'
  },
  {
    id: 'entertainmentNewsId',
    title: 'Entertainment',
    link: '/Entertainment',
    selected: false,
    collection: 'Entertaiment'
  },
  {
    id: 'healthNewsId',
    title: 'Health',
    link: '/Health',
    selected: false,
    collection: 'Health'
  },
  {
    id: 'SportsNewsId',
    title: 'Sports',
    link: '/Sports',
    selected: false,
    collection: 'Sports'
  }
];

export const MainNavigation = () => {
  let menuContent = initialMenu.map((item) => (
    <NavLink
      key={item.id}
      to={item.link}
      className={({ isActive }) => (isActive ? classes.active : undefined)}
      end
    >
      {item.title}
    </NavLink>
  ));

  return (
    // <div className={classes.headerContainer}>
    //   <div className={classes.logocontainer}>
    //     <h1>FC-NEWS</h1>
    //   </div>
    //   <ul className={classes.headerList}>{menuContent}</ul>
    // </div>

    <div className={classes.container}>
      <div className={classes.nav}>
        <input type="checkbox" id="navCheck" className="navCheck" />
        <div className={classes.navHeader}>
          <div className={classes.navTitle}>FC News</div>
        </div>
        <div className={classes.navBtn}>
          <label htmlFor="navCheck">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className={classes.navLinks}>{menuContent}</div>
      </div>
    </div>
  );
};
