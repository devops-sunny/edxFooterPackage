import React from "react";
import Logo from "./images/logo.png";
import "./css/docs.css";
const Footer = config => {
  return /*#__PURE__*/React.createElement("footer", {
    id: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-3"
  }, /*#__PURE__*/React.createElement("h5", null, "About Us"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-link"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/faq`
  }, "FAQs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/privacy`
  }, "Privacy Policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/tos`
  }, "Terms of Service")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/honor`
  }, "Honor Code")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/courses`
  }, "Courses")))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-3"
  }, /*#__PURE__*/React.createElement("h5", null, "What We Offer"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-link"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/about`
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/blog`
  }, "Blog")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/contact`
  }, "Contact ")))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Contact Us"), /*#__PURE__*/React.createElement("div", {
    className: "contact-slide"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-phone"
  }), /*#__PURE__*/React.createElement("label", null, "Wanna talk? "), "079-49004848"), /*#__PURE__*/React.createElement("div", {
    className: "contact-slide"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-phone"
  }), /*#__PURE__*/React.createElement("label", null, "Not a big talker? "), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "cs@buildabazaar.com"))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-logo"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${config?.LMS_BASE_URL}/`
  }, /*#__PURE__*/React.createElement("img", {
    src: Logo,
    alt: ""
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "copy-right"
  }, "\xA9 2017 BuildaBazaar. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "social-media"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-facebook-official"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-twitter"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-youtube"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-linkedin-square"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-google-plus-square"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-reddit"
  }))))))));
};
export default Footer;