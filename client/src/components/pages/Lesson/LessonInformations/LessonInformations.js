import { useHistory } from "react-router-dom";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import { useTranslate } from "../../../../utils/useTranslate";

import LessonTopInformations from "./LessonTopInformations/LessonTopInformations";

import "./LessonInformations.scss";

const LessonInformations = ({ lesson, setLesson }) => {
  const { t } = useTranslate();
  const history = useHistory();
  const { creator, name } = lesson;
  console.log(creator);

  return (
    <div className="lessonInformations__container">
      <div className="lessonInformations__wrapper">
        <PageWrapper>
          <div className="lessonInformations__header">
            <p className="lessonInformations__subTitle">COURS</p>
            <h1 className="lessonInformations__title">
              {lesson.name[0].toUpperCase() + name.substring(1)}
            </h1>
            <div className="lessonInformations__creatorText">
              Rédigé par{" "}
              <div
                className="lessonInformations__creatorName"
                onClick={() => {
                  history.push(`/user/${creator._id}`);
                }}
              >
                @{creator.pseudo}
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>

      <LessonTopInformations lesson={lesson} setLesson={setLesson} />
    </div>
  );
};

export default LessonInformations;
