import { useTranslation } from "react-i18next";
import title_image from "../assets/images/benefit.png";

const Benefit = () => {
  const { t } = useTranslation();

  return (
    <div className="badminton_container">
      <div className="badminton_title_image_container">
        <img className="badminton_title_image" src={title_image} alt="" />
        <h1>{t("benefit of badminton")}</h1>
      </div>
      <div className="benefit_content">
        <div className="benefit_content_wrapper">
          <div className="benefit_description">
            <h3>{t("benefit title 1")}</h3>
            <p>{t("benefit content 1")}</p>
          </div>
          <div className="benefit_description">
            <h3>{t("benefit title 2")}</h3>
            <p>{t("benefit content 2")}</p>
          </div>
          <div className="benefit_description">
            <h3>{t("benefit title 3")}</h3>
            <p>{t("benefit content 3")}</p>
          </div>
          <div className="benefit_description">
            <h3>{t("benefit title 4")}</h3>
            <p>{t("benefit content 4")}</p>
          </div>
          <div className="benefit_description">
            <h3>{t("benefit title 5")}</h3>
            <p>{t("benefit content 5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
