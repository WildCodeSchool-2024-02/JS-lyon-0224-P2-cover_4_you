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
        <a className={styles.logo_Cover4You} href="/" >
          {/* LogoHome */}
        </a>
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
              <a href={styles.navbar_route}>Our Librairie</a>
            </li>
            <li className={styles.navbar_links_items}>
              <a href={styles.navbar_route}>Our Books</a>
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
  );
}

export default Nav;
