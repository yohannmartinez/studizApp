import SelectInput from "../../../elements/SelectInput/SelectInput";
import { useTranslate } from "../../../../utils/useTranslate";
import { degreesToSelectFormat } from "../../../../utils/degrees";
import { facultiesToSelectFormat } from "../../../../utils/faculties";
import { getYearsRange } from "../../../../utils/years";
import "./SecondStep.scss";

const SecondStep = ({ lesson, updateLesson, nextStep }) => {
  const { t } = useTranslate();
  return (
    <div className="createLesson__secondStep__container">
      <SelectInput
        options={degreesToSelectFormat(t)}
        onChange={(option) => {
          updateLesson("degree", option.value.toString());
        }}
        label="PASSWORD"
        isSearchable={true}
        isMulti={false}
      />
      <div className="createLesson__secondStep__inputSeparator"></div>
      <SelectInput
        options={facultiesToSelectFormat(t)}
        onChange={(option) => {
          updateLesson("faculty", option.value.toString());
        }}
        label="PASSWORD"
        isSearchable={true}
        isMulti={false}
      />
      <div className="createLesson__secondStep__inputSeparator"></div>
      <SelectInput
        options={getYearsRange()}
        onChange={(option) => {
          updateLesson("year", option.value.toString());
        }}
        label="PASSWORD"
        isSearchable={true}
        isMulti={false}
      />
      <button
        className="createLesson__validateButton"
        disabled={lesson.description === "" || lesson.name === ""}
        onClick={() => {
          nextStep();
        }}
      >
        Etape suivante
      </button>
    </div>
  );
};

export default SecondStep;
