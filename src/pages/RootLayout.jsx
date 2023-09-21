// import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainNavigation } from '../components/MainNavigation';
import classes from '../css/RootLayout.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <div className={classes.newsContent}>
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
