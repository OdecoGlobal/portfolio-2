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

/*import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

// assets
import MyLogo from "../assets/MyLogo.svg";

export default function Navbar({ isOpen, toggleMenu }) {
  return (
    <nav className={styles.navbar}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={styles.navlogo}
      >
        <div className={styles.logo}>
          <img src={MyLogo} alt="odecoglobal logo" className={styles.logoImg} />
          <h2 className={styles["logo-name"]}>OdecoGlobal</h2>
        </div>
      </Link>

      

      <div
        className={`${styles["burger-menu"]} ${isOpen ? styles["open"] : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul className={`${styles["menu-link"]} ${isOpen ? styles["open"] : ""}`}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="project"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}*/
