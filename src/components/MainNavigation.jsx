import { useState } from 'react';
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
  const [checkInput, setCheckInput] = useState('');

  let menuContent = initialMenu.map((item) => {
    return (
      <div
        onClick={() => setCheckInput('')}
        key={item.id}
        className={classes.divNavLink}
      >
        <NavLink
          key={item.id}
          to={item.link}
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          {item.title}
        </NavLink>
      </div>
    );
  });

  return (
    <div className={classes.MainNavigation}>
      <nav className={classes.navMenu}>
        <input
          type="checkbox"
          id="navCheck"
          checked={checkInput}
          className="navCheck"
          onChange={() => setCheckInput((prevState) => !prevState)}
        />
        <div className={classes.navHeader}>
          <div className={classes.navTitle}>FC News</div>
        </div>

        <div className={classes.navLinks}>{menuContent}</div>
        <div className={classes.navBtn}>
          <label htmlFor="navCheck">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </nav>
    </div>
  );
};
