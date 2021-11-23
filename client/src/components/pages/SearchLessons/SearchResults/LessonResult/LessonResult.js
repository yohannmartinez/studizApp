import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslate } from "../../../../../utils/useTranslate";

import "./LessonResult.scss";

const LessonResult = ({ lesson, language }) => {
  const {
    _id,
    name,
    creator,
    views,
    faculty,
    degree,
    year,
    description,
    likes,
  } = lesson;
  const { t } = useTranslate();
  const history = useHistory();

  return (
    <div
      className="lessonResult__container"
      key={_id}
      onClick={() => {
        history.push(`/lesson/${lesson._id}`);
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
        <h1 className="lessonResult__tag lessonResult__purpleTag">
          {t(faculty)}
        </h1>
        <div className="lessonResult__tag lessonResult__yellowTag">
          {t(degree)}
        </div>
        <div className="lessonResult__tag lessonResult__greenTag">{year}</div>
        <div className="lessonResult__tag lessonResult__blueTag">
          {likes} j'aime
        </div>
      </div>

      <div className="lessonResult__description">
        {`${description.charAt(0).toUpperCase() + description.slice(1, 200)}`}
        {description.slice(1, 200).length === 199 && "..."}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps, null)(LessonResult);
