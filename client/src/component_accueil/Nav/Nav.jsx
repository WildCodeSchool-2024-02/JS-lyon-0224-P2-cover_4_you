import styles from "./Nav.module.css";

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
          <a href={styles.navbarRoute}>Conactez-nous</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
