import { useTranslation } from "react-i18next";

const Course = () => {
  const { t } = useTranslation();

  return (
    <div className="course_container">
      <ol className="course_order_list">
        <li>{t("course remark 1")}</li>
        <li>{t("course remark 2")}</li>
        <li>{t("course remark 3")}</li>
        <li>{t("course remark 4")}</li>
        <li>{t("course remark 5")}</li>
        <li>{t("course remark 6")}</li>
        <li>{t("course remark 7")}</li>
        <li>{t("course remark 8")}</li>
        <li>{t("course remark 9")}</li>
      </ol>
    </div>
  );
};

export default Course;
