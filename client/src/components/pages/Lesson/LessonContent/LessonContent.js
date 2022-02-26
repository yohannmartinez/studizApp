import { useEffect } from "react";
import { connect } from "react-redux";
import Editor from "../../../elements/Editor/Editor";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import { fakeLessonData } from "./fakeLessonData";
import "./LessonContent.scss";

const LessonContent = ({ lesson, isUserAuthorized, auth }) => {
  const canEdit = lesson.userId === auth.user._id;

  useEffect(() => {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
    window.addEventListener("devtoolschange", function (e) {
      console.log("is DevTools open?", e.detail.open);
      console.log("and DevTools orientation?", e.detail.orientation);
    });
  });

  return (
    <div className="lessonContent__container">
      <PageWrapper>
        <div
          className={`lessonContent__whiteContainer ${
            !isUserAuthorized && "lessonContent__userNotAuthorized"
          }`}
        >
          <Editor
            lesson={lesson}
            lessonData={isUserAuthorized ? lesson.data : fakeLessonData()}
            canEdit={canEdit}
          />
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
