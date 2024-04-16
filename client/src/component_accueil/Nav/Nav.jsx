// import PropTypes from "prop-types";
// import { useClickAway } from "react-use";
// import { useRef } from "react";
import { useState } from "react";
import styles from "./Nav.module.css";
import Burger from "../../assets/images/burger.svg";
import Croix from "../../assets/images/close.svg";

function Nav() {
  const [burgerNavOpen, setBurgerNavOpen] = useState(false);

  const handleBurgerNavOpen = () => {
    setBurgerNavOpen(!burgerNavOpen);
  };
  // const burgerref = useRef(null);
  // useClickAway(burgerref, () => setBurgerNavOpen(false));

  const handleBurgerNavClose = () => {
    setBurgerNavOpen(false);
  };

  return (
    <div>
      <nav
        className={`styles.navbar ${burgerNavOpen ? styles.menu_nav_open : styles.menu_nav_close}`}
      >
        <div className={styles.navBar}>
          <img
            className={styles.logo}
            src="src/assets/images/logo_accueil.png"
            alt="logo Cover4You"
          />
          <ul className={styles.navbarLinks_Container}>
            <li className={styles.navbarLinksItems.slideInDown1}>
              <a href={styles.navbarRoute}>Our Team</a>
            </li>
            <li className={styles.navbarLinksItems.slideInDown2}>
              <a href={styles.navbarRoute}>Our Librairie</a>
            </li>
            <li className={styles.navbarLinksItems.slideInDown3}>
              <a href={styles.navbarRoute}>My basket</a>
            </li>
            <li className={styles.navbarLinksItems.slideInDown4}>
              <a href={styles.navbarRoute}>Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button
            type="button"
            className={styles.menu_nav_open}
            onClick={handleBurgerNavOpen}
            aria-label="open menu burger"
          />

          <button
            type="button"
            className={styles.menu_nav_close}
            onClick={handleBurgerNavClose}
            aria-label="close menu burger"
          />
        </div>
      </nav>
    </div>
  );
}

//
export default Nav;

// Nav.propTypes =
//   logoCover4You: PropTypes.string.isRequired,
