import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to='/articles'>Articles</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
