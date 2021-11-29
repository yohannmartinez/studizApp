import SelectInput from "../../../elements/SelectInput/SelectInput";
import Input from "../../../elements/Input/Input";
import { getCities } from "../../../../services/cities";
import { useTranslate } from "../../../../utils/useTranslate";
import "./ThirdStep.scss";

const ThirdStep = ({
  lesson,
  updateLesson,
  launchLessonCreation,
  previousStep,
}) => {
  const { t } = useTranslate();

  const onCitySearch = async (inputValue, callback) => {
    if (inputValue === "") callback([]);
    const cities = await getCities(inputValue);
    const formatted_cities = cities.data.cities
      .map((city) => {
        return { label: city.name, value: city.name };
      })
      .sort((a, b) => a.label.localeCompare(b.label));
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
          updateLesson("city", option.value.toString());
        }}
        label="LESSON_CITY"
        isSearchable
        isMulti={false}
      />
      <div className="createLesson__thirdStep__inputSeparator"></div>

      <button
        className="createLesson__validateButton"
        disabled={lesson.institution === "" || lesson.city === ""}
        onClick={() => {
          launchLessonCreation();
        }}
      >
        {t("CREATE_LESSON_VALIDATION")}
      </button>
      <button
        className="createLesson__previousButton"
        onClick={() => {
          previousStep();
        }}
      >
        {t("PREVIOUS_STEP")}
      </button>
    </div>
  );
};

export default ThirdStep;
