import { Outlet } from 'react-router-dom';
import { MainNavigation } from '../components/MainNavigation';
import classes from '../css/RootLayout.module.css';

function RootLayout() {
  return (
    <main>
      <MainNavigation />
      <div className={classes.newsContent}>
        <Outlet />
      </div>
    </main>
  );
}

export default RootLayout;
