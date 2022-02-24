import { connect } from "react-redux";
import Editor from "../../../elements/Editor/Editor";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import "./LessonContent.scss";

const LessonContent = ({ lesson, auth }) => {
  const canEdit = lesson.userId === auth.user._id;

  return (
    <div className="lessonContent__container">
      <PageWrapper>
        <div className="lessonContent__whiteContainer">
          <Editor lesson={lesson} lessonData={lesson.data} canEdit={canEdit} />
        </div>
      </PageWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  language: state.language,
});

export default connect(mapStateToProps, null)(LessonContent);
