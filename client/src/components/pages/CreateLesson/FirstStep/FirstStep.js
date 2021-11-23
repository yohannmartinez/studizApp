import Input from "../../../elements/Input/Input";
import TextArea from "../../../elements/TextArea/TextArea";
import "./FirstStep.scss";

const FirstStep = ({ lesson, updateLesson, nextStep }) => {
  return (
    <div className="createLesson__firstStep__container">
      <Input
        value={lesson.name}
        inputColor="#9652B6"
        label="LESSON_NAME"
        placeholder="Exemple: Le théorème de pythagore"
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
        placeholder="Courte de description pour explique le sujet que tu vas aborder"
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
        Etape suivante
      </button>
    </div>
  );
};

export default FirstStep;
