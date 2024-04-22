import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <section>
        <ul>
          <li>
            <b>Information</b>
          </li>
          <li>
            <b>About</b>
          </li>
          <li>
            <b>Our services</b>
          </li>
          <li>
            <b>To discover</b>
          </li>
        </ul>
        <div className={styles.removeHalf}>
          <li>Help</li>
          <li>Trades</li>
          <li>A question?</li>
          <li>Privacy policy</li>
          <li>Terms of Sales</li>
          <li>Learn more</li>
          <li>Customise</li>
          <li>Soldes</li>
          <li>Follow us</li>
          <li>FAQ</li>
          <li>Notes</li>
          <li>Cookies policy</li>
          <li>Our values</li>
          <li>Personal data</li>
          <li>Practical advice</li>
          <li>Free return</li>
          <li>Legal notice</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Join us</li>
        </div>
      </section>
      <section className={styles.alignLogo}>
        <article>
          <div id="logo-ecolo">
            <img
              src="src/assets/images-footer/logo-ecologie.png"
              alt="logo-ecologie"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div id="logo-x">
            <img
              src="src/assets/images-footer/icons8-x-50.png"
              alt="logo-x"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div id="logo-insta">
            <img
              src="src/assets/images-footer/icons8-instagram.svg"
              alt="logo-insta"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div id="logo-facebook">
            <img
              src="src/assets/images-footer/icons8-facebook.svg"
              alt="logo-facebook"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </article>
        <div id="a">
          <p>| Copyright© 2024 |</p>
        </div>
        <article>
          <div>
            <img
              src="src/assets/images-footer/logo-carte-paiement.png"
              alt="carte-paiement"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div>
            <img
              src="src/assets/images-footer/logo-paypal.png"
              alt="paypal"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div>
            <img
              src="src/assets/images-footer/logo-carte-cadeau.png"
              alt="carte-cadeau"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div>
            <img
              src="src/assets/images-footer/logo-livraison.png"
              alt="livraison"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </article>
      </section>
    </footer>
  );
}
export default Footer;
