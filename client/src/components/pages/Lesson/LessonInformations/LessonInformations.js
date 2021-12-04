import { useHistory } from "react-router-dom";
import {
  faBook,
  faEllipsisV,
  faEye,
  faGraduationCap,
  faMapMarkedAlt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import { useTranslate } from "../../../../utils/useTranslate";

import "./LessonInformations.scss";
import LessonTopInformations from "./LessonTopInformations/LessonTopInformations";

const LessonInformations = ({ lesson }) => {
  const { t } = useTranslate();
  const history = useHistory();
  const { creator, name } = lesson;

  return (
    <div className="lessonInformations__container">
      <PageWrapper>
        <div className="lessonInformations__header">
          <p className="lessonInformations__subTitle">COURS</p>
          <h1 className="lessonInformations__title">
            {lesson.name[0].toUpperCase() + name.substring(1)}
          </h1>
          <div className="lessonInformations__creatorText">
            Rédigé par
            <div
              className="lessonInformations__creatorName"
              onClick={() => {
                history.push(`/user/${creator._id}`);
              }}
            >{` ${creator.firstname} ${creator.lastname}`}</div>
          </div>
        </div>
      </PageWrapper>

      <LessonTopInformations lesson={lesson} />
    </div>
  );
};

export default LessonInformations;
