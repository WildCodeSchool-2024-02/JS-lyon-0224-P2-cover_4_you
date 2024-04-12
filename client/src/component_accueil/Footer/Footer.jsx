import "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <address>
        <ul>
          <li>Actualités</li>
          <li>Historique</li>
          <li>Evènements</li>
          <li>Rejoignez-nous</li>
        </ul>
      </address>
      <div className="image-logo">
        <img src="src/assets/images/icons8-x-50.png" alt="logo-x" />
        <img src="src/assets/images/icons8-instagram.svg" alt="logo-insta" />
        <img src="src/assets/images/icons8-facebook.svg" alt="logo-facebook" />
      </div>
      <p>Copyright</p>
    </footer>
  );
}

export default Footer;
