// import PropTypes from "prop-types";
// import { useClickAway } from "react-use";
// import { useRef } from "react";
import { useState } from "react";
import styles from "./Nav.module.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleBurgerNavClose = () => {
  //   setIsMenuOpen(false);
  // };

  return (
    <div className={styles.nav_container}>
      <nav className={styles.navbar}>
  
      <img
              className={styles.logo_Cover4You}
              src="src/assets/images/logo_accueil.png"
              alt="logo Cover4You"
            />

      {/* <div className={styles.nav_burger_container}> */}
      <button
              type="button"
              id="button_navbar"
              onClick={toggleMenu}
              className={
                isMenuOpen === true
                  ? styles.burger_nav_open
                  : styles.cross_nav_close
              }
              aria-label="Open menu burger"
            />
        {/* </div> */}

          {isMenuOpen === true && (
          <section className={styles.handle_menu}>
            <ul className={styles.navbar_links_container}>
              <li className={styles.navbar_links_items}>
                <a href={styles.navbar_route}>Our Librairie</a>
              </li>
              <li className={styles.navbar_links_items}>
                <a href={styles.navbar_route}>Our Teams</a>
              </li>
              <li className={styles.navbar_links_items}>
                <a href={styles.navbar_route}>My basket</a>
              </li>
              <li className={styles.navbar_links_items}>
                <a href={styles.navbar_route}>Contact</a>
              </li>
            </ul>
          </section>
        )}
   
      </nav>
    </div>
  );
}

export default Nav;

// Nav.propTypes =
//   logoCover4You: PropTypes.string.isRequired,
