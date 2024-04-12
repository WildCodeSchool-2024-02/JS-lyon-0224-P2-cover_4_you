// import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./Nav.module.css";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleHiddenLinks = () => {
    setShowLinks(false);
  };


  return (
<div>
      <nav className={`styles.navbar ${showLinks ? styles.showNav : styles.hideNav}`} >
      <div className={styles.navBar}>
        <img className={styles.logo} src="src/assets/images/logo_accueil.png" alt="logo Cover4You"/>
          <ul className={styles.navbarLinks}>
              <li className={styles.navbarLinksItems .slideInDown1}>
                <a href={styles.navbarRoute}>Our Team</a>
              </li>
              <li className={styles.navbarLinksItems .slideInDown2}>
                <a href={styles.navbarRoute}>Our Librairie</a>
              </li>
              <li className={styles.navbarLinksItems .slideInDown3}>
                <a href={styles.navbarRoute}>My basket</a>
              </li>
              <li className={styles.navbarLinksItems .slideInDown4}>
                <a href={styles.navbarRoute}>Contact</a>
              </li>
            </ul>
        </div>
        <div>
          <button className={styles.navbarBurger} type="button" onClick={handleShowLinks}>
            Open
          </button>
          <button type="button" onClick={handleHiddenLinks}>
            fermer{showLinks}
            </button>
        </div>
          {/* <div className={styles.burgerBar}></div> */}
      </nav>
</div>
  );
}

    
export default Nav;


// Nav.propTypes =
//   logoCover4You: PropTypes.string.isRequired,
