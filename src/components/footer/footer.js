import React from "react";
import { Image } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-3 footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="title">Община Копривщица</h5>
            <div className="footer-images-container d-flex align-items-center">
              <Image
                src="https://koprivshtitsa-bg.com/images/gerb11.png"
                className="footer-images"
              />
              <Image
                src="https://koprivshtitsa-bg.com/images/eu.jpg"
                className="footer-images ml-4"
              />
              <Image
                src="https://koprivshtitsa-bg.com/images/bg.jpg"
                className="footer-images ml-4"
              />
            </div>
            <div className="share my-3">
              <a href="https://www.instagram.com">
                <FaInstagram size={38} className="ml-4" />
              </a>

              <a href="https://www.facebook.com">
                <FaFacebook size={38} className="ml-4" />
              </a>

              <a href="https://www.twitter.com">
                <FaTwitter size={38} className="ml-4" />
              </a>
            </div>
          </div>
          <div className="col">
            <h5>За нас:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://europa.eu/european-union/abouteuropa/privacy-policy_bg">
                  Политика за поверителност
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://iisda.government.bg/legal_information">
                  Правна информация
                </a>
              </li>
              <li className="list-unstyled">
                <a href="http://www.meteo.bg/">Времето</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Община</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://koprivshtitsa-bg.com/bg/municipality/profil-na-kupuvacha/">
                  Профил на купувача
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://koprivshtitsa-bg.com/bg/municipality/administratsiya/">
                  Администрация
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://koprivshtitsa-bg.com/bg/municipality/byudjeti-i-otcheti/">
                  Бюджети и отчети
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="title">Партньори:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://reactstrap.github.io/">Reactstrap</a>
              </li>
              <li className="list-unstyled">
                <a href="https://react-bootstrap.github.io/">React-Bootstrap</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.svgrepo.com/">SVGRepo</a>
              </li>
              <li className="list-unstyled">
                <a href="https://material-ui.com/">Material-UI</a>
              </li>
              <li className="list-unstyled">
                <a href="https://fsymbols.com/signs/stars/">FSymbols Stars</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 col-12">
          &copy; {new Date().getFullYear()} Copyright: По идея на официалния
          сайт на{" "}
          <a href="https://koprivshtitsa-bg.com/bg/">Община Копривщица </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
