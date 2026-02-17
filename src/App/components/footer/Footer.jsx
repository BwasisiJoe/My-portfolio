import "./footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <p className="footer__copyright">
        Copyright © {year} Joshua Mugabo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;