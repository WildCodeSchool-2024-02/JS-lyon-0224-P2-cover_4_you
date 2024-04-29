import { useState } from "react";
import styles from "./Nav.module.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <a className={styles.logo_Cover4You} href="/" aria-label="Accueil" />
        <button
          id="button_navbar"
          type="button"
          onClick={toggleMenu}
          className={
            isMenuOpen === true
              ? styles.burger_nav_open
              : styles.cross_nav_close
          }
          aria-label="Open menu burger"
        />
      </div>

      {isMenuOpen === true && (
        <section className={styles.handle_menu}>
          <ul className={styles.navbar_links_container}>
            <li className={styles.navbar_links_items}>
              Our Librairie
            </li>
            <li className={styles.navbar_links_items}>
              Our Books
            </li>
            <li className={styles.navbar_links_items}>
              My basket
            </li>
            <li className={styles.navbar_links_items}>
              Contact
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
}

export default Nav;
