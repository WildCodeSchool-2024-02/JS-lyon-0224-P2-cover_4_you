import styles from "./Nav.module.css";
import SearchBar from "./SearchBar";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Logo</div>
      <ul className={styles.navbarLinks}>
        <li className={styles.navbarLinksItems}>
          <a href={styles.navbarRoute}>Our Team</a>
        </li>
        <li className={styles.navbarLinksItems}>
          <a href={styles.navbarRoute}>Our Librairie</a>
        </li>
        <li className={styles.navbarLinksItems}>
          <a href={styles.navbarRoute}>My basket</a>
        </li>
        <li className={styles.navbarLinksItems}>
          <a href={styles.navbarRoute}>Contact</a>
        </li>
      </ul>
      <SearchBar />
      {/* <button className={styles.menuBurger}></button>
    <button className={styles.menuCross}></button> */}
    </nav>
  );
}

export default Nav;
