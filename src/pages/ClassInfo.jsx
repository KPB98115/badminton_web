import "../App.css";
import { useTranslation } from "react-i18next";
import DropdownList from "../components/DropdownList";
import image from "../assets/images/class_info.png";

const ClassInfo = () => {
  const { t } = useTranslation();

  const newbie_items = [
    t("newbie target"),
    t("newbie time"),
    t("newbie price"),
  ];
  const primary_items = [
    t("primary target"),
    t("primary time"),
    t("primary price"),
  ];
  const junior_items = [
    t("junior target"),
    t("junior time"),
    t("junior price"),
  ];
  const private_items = [
    t("private target"),
    t("private info"),
    t("private price"),
  ];

  return (
    <div className="classInfo_container">
      <div className="classInfo_wrapper">
        <div className="classInfo_image">
          <img src={image} alt="" />
        </div>
        <div className="classInfo_description">
          <h1>{t("class info")}</h1>
          <div className="classInfo_list_container">
            <DropdownList title={t("newbie class")} items={newbie_items} />
            <DropdownList title={t("primary class")} items={primary_items} />
            <DropdownList title={t("junior class")} items={junior_items} />
            <DropdownList title={t("private class")} items={private_items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
