import { useHistory } from "react-router-dom";
import { useTranslate } from "../../../../utils/useTranslate";
import "./UserLessons.scss";

const UserLessons = ({ lessons }) => {
  const { t } = useTranslate();
  const history = useHistory();
  return (
    <>
      {lessons.length === 0 ? (
        <h1 className="userLessons__title">{t("NO_LESSON")}</h1>
      ) : (
        <div className="userLessons__container">
          {lessons.map((lesson) => (
            <div
              className="userLessons__lesson"
              onClick={() => {
                history.push(`/lesson/${lesson._id}`);
              }}
            >
              <h1 className="userLessons__lesson__title">{lesson.name}</h1>
              coucou
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserLessons;
