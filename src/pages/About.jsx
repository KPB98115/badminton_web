import { useTranslation } from "react-i18next";
import "../App.css";
import image2 from "../assets/images/image3.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about_container">
      <div className="about_content">
        <h1>{t("about bcn")}</h1>
        <p>{t("about 1")}</p>
      </div>
      <div className="about_concept">
        <div className="about_brand_concept">
          <h1>{t("about concept")}</h1>
          <div className="about_brand_concept_wrapper">
            <div className="about_brand_concept_content">
              <h3>{t("about 2")}</h3>
              <p>{t("about 3")}</p>
            </div>
            <img className="about_brand_concept_image" src="" alt="" />
          </div>
        </div>
        <div className="about_image">
          <img src={image2} alt="image2" />
        </div>
      </div>
    </div>
  );
};

export default About;
