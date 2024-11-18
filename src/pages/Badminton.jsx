import { useTranslation } from "react-i18next";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image1.jpg";
import title_image from "../assets/images/badminton.jpg";

const Badminton = () => {
  const { t } = useTranslation();

  return (
    <div className="badminton_container">
      <div className="badminton_title_image_container">
        <img className="badminton_title_image" src={title_image} alt="" />
        <h1>{t("badminton title")}</h1>
      </div>
      <div className="badminton_content">
        <div className="badminton_content_wrapper">
          <img src={image1} alt="" />
          <div className="badmint_description">
            <h3>{t("badminton history title")}</h3>
            <p>{t("badminton history content")}</p>
          </div>
        </div>
        <div className="badminton_content_wrapper">
          <div className="badmint_description">
            <h3>{t("badminton popular title")}</h3>
            <p>{t("badminton popular content")}</p>
          </div>
          <img src={image2} alt="" />
        </div>
        <div className="badminton_content_wrapper">
          <img src={image3} alt="" />
          <div className="badmint_description">
            <h3>{t("badminton feather title")}</h3>
            <p>{t("badminton feather content")}</p>
          </div>
        </div>
        <div className="badminton_content_wrapper">
          <div className="badmint_description">
            <h3>{t("badminton name title")}</h3>
            <p>{t("badminton name content")}</p>
          </div>
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Badminton;
