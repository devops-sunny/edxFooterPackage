import Logo from "./images/logo.png";
import "./css/docs.css";

function Footer(config) {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h5>About Us</h5>
            <ul className="footer-link">
              <li>
                <a href={`${config?.LMS_BASE_URL}/faq`}>FAQs</a>
              </li>
              <li>
                <a href={`${config?.LMS_BASE_URL}/privacy`}>Privacy Policy</a>
              </li>
              <li>
                <a href={`${config?.LMS_BASE_URL}/tos`}>Terms of Service</a>
              </li>
              <li>
                <a href={`${config?.LMS_BASE_URL}/honor`}>Honor Code</a>
              </li>
              <li>
                <a href={`${config?.LMS_BASE_URL}/courses`}>Courses</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>What We Offer</h5>
            <ul className="footer-link">
              <li>
                <a href={`${config?.LMS_BASE_URL}/about`}>About</a>
              </li>
              <li>
                <a href={`${config?.LMS_BASE_URL}/blog`}>Blog</a>
              </li>
              <li>
                <a href={`${config?.LMS_BASE_URL}/contact`}>Contact </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Contact Us</h5>
            <div className="contact-slide">
              <i className="fa fa-phone" />
              <label>Wanna talk? </label>
              079-49004848
            </div>
            <div className="contact-slide">
              <i className="fa fa-phone" />
              <label>Not a big talker? </label>
              <a href="#">cs@buildabazaar.com</a>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer-logo">
              <a href={`${config?.LMS_BASE_URL}/`}>
                <img src={Logo} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy-right">
            © 2017 BuildaBazaar. All rights reserved.
          </div>
          <div className="social-media">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook-official" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-reddit" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

module.exports = Footer;
