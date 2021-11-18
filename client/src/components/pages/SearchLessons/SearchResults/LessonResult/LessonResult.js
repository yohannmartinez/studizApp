import { useTranslate } from "../../../../../utils/useTranslate";

import "./LessonResult.scss";

const LessonResult = ({ lesson }) => {
  const { name, creator, views, faculty, degree, year, description } = lesson;
  const { t } = useTranslate();
  return (
    <div
      className="lessonResult__container"
      onClick={() => {
        console.log(lesson);
        console.log();
      }}
    >
      <div className="lessonResult__header">
        <div
          className="lessonResult__profileImage"
          style={{ backgroundImage: `url('${creator.profile_image}')` }}
        ></div>
        <div className="lessonResult__lessonViews">{views} vues</div>
      </div>
      <h1 className="lessonResult__lessonTitle">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>

      <div className="lessonResult__tagsContainer">
        <div className="lessonResult__tag lessonResult__purpleTag">
          {t(faculty)}
        </div>
        <div className="lessonResult__tag lessonResult__yellowTag">
          {t(degree)}
        </div>
        <div className="lessonResult__tag lessonResult__greenTag">{year}</div>
      </div>

      <div className="lessonResult__description">
        {`${description.charAt(0).toUpperCase() + description.slice(1, 200)}`}
        {description.slice(1, 200).length === 199 && "..."}
      </div>
    </div>
  );
};

export default LessonResult;
