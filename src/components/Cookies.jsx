import { useState } from "react";
import { useTranslation } from "react-i18next";

const Cookies = (prop) => {
  const [acceptCookies, setAcceptCookies] = useState(false);
  const { t } = useTranslation();

  const loadGoogleAnalytics = () => {
    if (!window.ga && acceptCookies) {
      const script = document.createElement("script");
      script.src =
        "https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "YOUR_GA_TRACKING_ID");
      };
    }
  };

  const handleAcceptCookies = () => {
    loadGoogleAnalytics();
    sessionStorage.setItem("acceptd_cookies_token", Date.now());
    setAcceptCookies(true);
    prop.enableCookiesPopup();
  };

  const handleDeniedCookies = () => {
    setAcceptCookies(false);
    prop.enableCookiesPopup();
  };

  return (
    <div className="modal_wrapper">
      <div className="modal_container">
        <div className="modal_title">
          <h2>{t("cookies title")}</h2>
        </div>
        <div className="modal_content">
          <p>{t("cookies content")}</p>
        </div>
        <div className="modal_button_container">
          <button
            className="modal_button"
            id="modal_cookies_accept_btn"
            onClick={handleAcceptCookies}
          >
            {t("cookies accept")}
          </button>
          <button
            className="modal_button"
            id="modal_cookies_denied_btn"
            onClick={handleDeniedCookies}
          >
            {t("cookies denied")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
