import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

// assets
import MyLogo from '../assets/MyLogo.svg';

export default function Navbar({ isOpen, toggleMenu, close }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navlogo}>
        <div className={styles.logo}>
          <img src={MyLogo} alt="odecoglobal logo" className={styles.logoImg} />
          <h2 className={styles['logo-name']}>OdecoGlobal</h2>
        </div>
      </Link>

      {/* burger-menu */}

      <div
        className={`${styles['burger-menu']} ${isOpen ? styles['open'] : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul
        className={`${styles['menu-link']} ${isOpen ? styles['open'] : ''}`}
        onClick={close}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
