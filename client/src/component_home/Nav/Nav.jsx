import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Close from "../../assets/images-navBar/close.svg";
import Open from "../../assets/images-navBar/burger2.png";
import Logo from "../../assets/images-navBar/logo_accueil.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <a href="/">
          <img className={styles.logo_Cover4You} src={Logo} alt="Accueil" />
        </a>

        <div className={styles.button_navbar}>
          <button
            type="button"
            onClick={toggleMenu}
            className={styles.button_mobile}
            aria-label="Open menu burger"
          >
            <img
              className={styles.burger_nav_open}
              src={isMenuOpen === true ? Close : Open}
              alt=""
            />
          </button>
        </div>
      </div>

      {(isMenuOpen === true || isDesktop === true) && (
        <section className={styles.handle_menu}>
          <ul className={styles.navbar_links_container}>
            <li className={styles.navbar_links_items}>Our Librairie</li>
            <li className={styles.navbar_links_items}>Our Books</li>
            <li className={styles.navbar_links_items}>My basket</li>
            <li className={styles.navbar_links_items}>Contact</li>
          </ul>
        </section>
      )}
    </nav>
  );
}

export default Nav;
