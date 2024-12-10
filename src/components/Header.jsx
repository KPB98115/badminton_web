import { Link, useLocation } from "react-router-dom";
import "../App.css";
import badminton_icon from "../assets/images/bcn_logo_transparent.png";
import { useTranslation } from "react-i18next";
import i18n from "../assets/static/i18n.js";
import { useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [isHover, setIsHover] = useState(false);

  const handleLanguageToggle = () => {
    if (i18n.language === "zh-TW") {
      i18n.changeLanguage("en-US");
    } else {
      i18n.changeLanguage("zh-TW");
    }
  };

  const handleClick = (element) => {
    const header_links = document.getElementsByClassName("header_link");
    for (let link of header_links) {
      link.className = "header_link";
    }
    element.className += " active";
    console.log(element.className);
  };

  return (
    <header
      className={"header " + (location.pathname !== "/" ? "fill_bg" : "")}
    >
      <div className="icon_container">
        <img src={badminton_icon} alt="Badminton Web Logo" />
      </div>
      <div className="navBar_container">
        <div className="navBar_wrapper">
          <nav id="navBar">
            <a>
              <Link
                to="/badminton_web"
                className="header_link"
                onClick={(e) => handleClick(e.target)}
              >
                {t("home")}
              </Link>
            </a>
            <a>
              <Link
                to="/about"
                className="header_link"
                onClick={(e) => handleClick(e.target)}
              >
                {t("about us")}
              </Link>
            </a>
            <a
              //id="badminton_header_list_container"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Link
                to="/badminton_info"
                className="header_link"
                onClick={(e) => handleClick(e.target)}
              >
                {t("badminton")}
              </Link>
              {isHover && (
                <div id="badminton_header_list">
                  <Link to="/badminton_info">{t("badminton title")}</Link>
                  <Link to="/benefit">{t("benefit of badminton")}</Link>
                </div>
              )}
            </a>
            <a>
              <Link
                to="/instructor"
                className="header_link"
                onClick={(e) => handleClick(e.target)}
              >
                {t("instructor")}
              </Link>
            </a>
            <a>
              <Link
                to="/classinfo"
                className="header_link"
                onClick={(e) => handleClick(e.target)}
              >
                {t("class info")}
              </Link>
            </a>
            <a>
              <Link
                to="/course"
                className="header_link"
                onClick={(e) => handleClick(e.target)}
              >
                {t("course informations")}
              </Link>
            </a>
            <a>
              <Link
                to="/contact"
                className="header_link"
                onClick={(e) => handleClick(e.target)}
              >
                {t("contact us")}
              </Link>
            </a>
          </nav>
          <div className="lang_container">
            <p
              id={
                "lang_option_zh_" + (i18n.language === "zh-TW" ? "active" : "")
              }
              onClick={() => handleLanguageToggle()}
            >
              中
            </p>
            <p
              id={
                "lang_option_en_" + (i18n.language === "en-US" ? "active" : "")
              }
              onClick={() => handleLanguageToggle()}
            >
              EN
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
