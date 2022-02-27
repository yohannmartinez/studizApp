import { useState } from "react";
import SelectInput from "../../../elements/SelectInput/SelectInput";
import Input from "../../../elements/Input/Input";
import { getCities } from "../../../../services/cities";
import { useTranslate } from "../../../../utils/useTranslate";
import "./ThirdStep.scss";
import CheckBox from "../../../elements/CheckBox/CheckBox";
import Button from "../../../elements/Button/Button";
import { Link } from "react-router-dom";

const ThirdStep = ({
  lesson,
  updateLesson,
  launchLessonCreation,
  previousStep,
}) => {
  const { t } = useTranslate();
  const [legalConsent, setLegalConsent] = useState(false);

  const onCitySearch = async (inputValue, callback) => {
    if (inputValue === "") callback([]);
    const cities = await getCities(inputValue);
    const formatted_cities = cities.data.cities
      .map((city) => {
        return { label: city.name, value: city.name };
      })
      .filter((city) =>
        city.label.toLowerCase().startsWith(inputValue.toLowerCase())
      );
    callback(formatted_cities);
  };

  return (
    <div className="createLesson__thirdStep__container">
      <Input
        value={lesson.institution}
        inputColor="#9652B6"
        label="LESSON_INSTITUTION"
        placeholder={t("LESSON_INSTITUTION_PLACEHOLDER")}
        onChange={(e) => {
          updateLesson("institution", e.target.value);
        }}
        type="text"
      />
      <div className="createLesson__thirdStep__inputSeparator"></div>
      <SelectInput
        isAsync
        loadOptions={(inputValue, callback) => {
          onCitySearch(inputValue, callback);
        }}
        defaultValue={
          lesson.city === "" ? "" : { label: lesson.city, value: lesson.city }
        }
        onChange={(option) => {
          option
            ? updateLesson("city", option.value.toString())
            : updateLesson("city", "");
        }}
        label="LESSON_CITY"
        isSearchable
        isMulti={false}
        isClearable={true}
      />
      <div className="createLesson__thirdStep__checkboxSeparator"></div>
      <CheckBox
        isChecked={lesson.private}
        action={() => {
          updateLesson("private", !lesson.private);
        }}
      >
        <div className="createLesson__thirdStep__checkboxContent">
          <h1 className="createLesson__thirdStep__checkboxTitle">
            {t("CREATE_LESSON_ISPRIVATE_TITLE")}
          </h1>
          <p className="createLesson__thirdStep__checkboxText">
            {t("CREATE_LESSON_ISPRIVATE_DESCRIPTION")}
          </p>
        </div>
      </CheckBox>
      <div className="createLesson__thirdStep__checkboxSeparator"></div>
      <CheckBox
        isChecked={legalConsent}
        action={() => {
          setLegalConsent(!legalConsent);
        }}
      >
        <div className="createLesson__thirdStep__checkboxContent">
          <h1 className="createLesson__thirdStep__checkboxTitle">
            {t("CREATE_LESSON_CGU_TITLE")}
          </h1>
          <p className="createLesson__thirdStep__checkboxText">
            {t("CREATE_LESSON_CGU_PART_ONE")}
            <Link to="/termsOfUse" target="_blank" rel="noopener noreferrer">
              {t("CREATE_LESSON_CGU_PART_TWO")}
            </Link>
          </p>
        </div>
      </CheckBox>
      <Button
        className="createLesson__validateButton"
        model={"basic"}
        style={{ marginTop: "50px" }}
        disabled={
          lesson.institution === "" ||
          lesson.city === "" ||
          legalConsent === false
        }
        action={() => {
          launchLessonCreation();
        }}
      >
        {t("CREATE_LESSON_VALIDATION")}
      </Button>
      <Button
        className="createLesson__previousButton"
        style={{ marginTop: "10px" }}
        model={"white"}
        action={() => {
          previousStep();
        }}
      >
        {t("PREVIOUS_STEP")}
      </Button>
    </div>
  );
};

export default ThirdStep;
