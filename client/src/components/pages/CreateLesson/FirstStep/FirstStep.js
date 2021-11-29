import { useTranslate } from "../../../../utils/useTranslate";
import Input from "../../../elements/Input/Input";
import TextArea from "../../../elements/TextArea/TextArea";
import "./FirstStep.scss";

const FirstStep = ({ lesson, updateLesson, nextStep }) => {
  const { t } = useTranslate();

  return (
    <div className="createLesson__firstStep__container">
      <Input
        value={lesson.name}
        inputColor="#9652B6"
        label="LESSON_NAME"
        placeholder={t("SEARCH_LESSON_SEARCH_PLACEHOLDER")}
        onChange={(e) => {
          updateLesson("name", e.target.value);
        }}
        type="text"
      />
      <div className="createLesson__firstStep__inputSeparator"></div>
      <TextArea
        value={lesson.description}
        TextAreaColor="#9652B6"
        label="LESSON_DESCRIPTION"
        TextAreaHeight="200px"
        placeholder={t("LESSON_DESCRIPTION_PLACEHOLDER")}
        onChange={(e) => {
          updateLesson("description", e.target.value);
        }}
        type="text"
      />
      <button
        className="createLesson__validateButton"
        disabled={lesson.description === "" || lesson.name === ""}
        onClick={() => {
          nextStep();
        }}
      >
        {t("NEXT_STEP")}
      </button>
    </div>
  );
};

export default FirstStep;
