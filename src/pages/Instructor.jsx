import { useTranslation } from "react-i18next";
import image from "../assets/images/instructor.png";
import DropdownList from "../components/DropdownList";

const Instructor = () => {
  const { t } = useTranslation();

  return (
    <div className="instructor_container">
      <img src={image} alt="" />
      <div className="instructor_description">
        <div className="instructor_title">
          <p>{t("name")}</p>
          <h2>{t("head cocah")}</h2>
        </div>
        <div className="instructor_content">
          <div className="instructor_list_container">
            <DropdownList
              title={t("certification")}
              items={[t("cert 1"), t("cert 2"), t("cert 3")]}
            />
            <DropdownList title={t("exp")} items={[t("exp 1"), t("exp 2")]} />
            <DropdownList
              title={t("award")}
              items={[
                t("award 1"),
                t("award 2"),
                t("award 3"),
                t("award 4"),
                t("award 5"),
                t("award 6"),
                t("award 7"),
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
