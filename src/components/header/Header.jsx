import React, { useState } from 'react';
import classes from './Header.module.css';

const initialMenu = [
  {
    id: 'headlineNewsId',
    title: 'Home',
    link: '#',
    selected: true,
    collection: 'Headlines'
  },
  {
    id: 'businessNewsId',
    title: 'Business',
    link: '#',
    selected: false,
    collection: 'Business'
  },
  {
    id: 'technologyNewsId',
    title: 'Technology',
    link: '#',
    selected: false,
    collection: 'Technology'
  },
  {
    id: 'scienceNewsId',
    title: 'Science',
    link: '#',
    selected: false,
    collection: 'Science'
  },
  {
    id: 'entertainmentNewsId',
    title: 'Entertainment',
    link: '#',
    selected: false,
    collection: 'Entertaiment'
  },
  {
    id: 'healthNewsId',
    title: 'Health',
    link: '#',
    selected: false,
    collection: 'Health'
  },
  {
    id: 'SportsNewsId',
    title: 'Sports',
    link: '#',
    selected: false,
    collection: 'Sports'
  }
];

const Header = ({ oncatChange, updatedAt }) => {
  const [menu, setMenu] = useState(initialMenu);

  const menuHandler = (ev) => {
    ev.preventDefault();
    console.log(ev);
    let menuItemSelected;
    const SelectedMenuTitle = ev.target.innerText;
    // console.log('SelectedMenutitle', SelectedMenuTitle);
    let menuCopy = [...menu];

    for (let i = 0; i < menuCopy.length; i++) {
      let item = menuCopy[i];
      if (item.title === SelectedMenuTitle) {
        item.selected = true;
        menuItemSelected = item;
      } else {
        item.selected = false;
      }
    }

    /*
    menuCopy.forEach((item) => {
      if (item.title === SelectedMenuTitle) {
        item.selected = true;
        menuItemSelected= item;
      } else {
        item.selected = false;
      }
    });
    if (SelectedMenuTitle === 'Home') {
      props.oncatChange(null);
    } else {
      props.oncatChange(SelectedMenuTitle);
    }
*/

    // console.log('menu', menuCopy);
    // console.log('menuItemSelected: ', menuItemSelected);
    setMenu(menuCopy);
    oncatChange({
      id: menuItemSelected.id,
      collection: menuItemSelected.collection
    });
  };

  let menuContent = menu.map((item) => {
    if (item.selected) {
      return (
        <a
          key={item.id}
          href={item.link}
          onClick={menuHandler}
          className={classes.selected}
        >
          {item.title}
        </a>
      );
    }
    return (
      <a key={item.id} href={item.link} onClick={menuHandler}>
        {item.title}
      </a>
    );
  });

  return (
    // <div className={classes.headerContainer}>
    //   <div className={classes.logocontainer}>
    //     <h1>FC-NEWS</h1>
    //   </div>
    //   <ul className={classes.headerList}>{menuContent}</ul>
    // </div>
    <div className={classes.container}>
      <div className={classes.nav}>
        <input type="checkbox" id="navCheck"></input>
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

export default Header;
