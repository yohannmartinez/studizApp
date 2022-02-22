import SelectInput from "../../../elements/SelectInput/SelectInput";
import { useTranslate } from "../../../../utils/useTranslate";
import { degreesToSelectFormat } from "../../../../utils/degrees";
import { studyFieldsToSelectFormat } from "../../../../utils/studyFields";
import { getYearsRange } from "../../../../utils/years";
import "./SecondStep.scss";
import Button from "../../../elements/Button/Button";

const SecondStep = ({ lesson, updateLesson, nextStep, previousStep }) => {
  const { t } = useTranslate();
  const { degree, studyField, year } = lesson;
  return (
    <div className="createLesson__secondStep__container">
      <SelectInput
        options={degreesToSelectFormat(t)}
        onChange={(option) => {
          updateLesson("degree", option.value.toString());
        }}
        label="LESSON_DEGREE"
        defaultValue={{ value: degree, label: degree === "" ? "" : t(degree) }}
        isSearchable={true}
        isMulti={false}
      />
      <div className="createLesson__secondStep__inputSeparator"></div>
      <SelectInput
        options={studyFieldsToSelectFormat(t)}
        onChange={(option) => {
          updateLesson("studyField", option.value.toString());
        }}
        label="LESSON_STUDY_FIELD"
        defaultValue={{
          value: studyField,
          label: studyField === "" ? "" : t(studyField),
        }}
        isSearchable={true}
        isMulti={false}
      />
      <div className="createLesson__secondStep__inputSeparator"></div>
      <SelectInput
        options={getYearsRange()}
        onChange={(option) => {
          updateLesson("year", option.value.toString());
        }}
        label="LESSON_YEAR"
        defaultValue={{ value: year, label: year }}
        isSearchable={true}
        isMulti={false}
      />

      <Button
        className="createLesson__validateButton"
        model={"basic"}
        style={{ marginTop: "20px" }}
        disabled={degree === "" || studyField === "" || year === ""}
        action={() => {
          nextStep();
        }}
      >
        {t("NEXT_STEP")}
      </Button>
      <Button
        className="createLesson__validateButton"
        model={"white"}
        style={{ marginTop: "10px" }}
        action={() => {
          previousStep();
        }}
      >
        {t("PREVIOUS_STEP")}
      </Button>
    </div>
  );
};

export default SecondStep;
