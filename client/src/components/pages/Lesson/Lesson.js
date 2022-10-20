import "./Lesson.scss";

import { addLessonView, getLessonById } from "../../../services/lessons";
import { resetSnack, setSnack } from "../../../actions/snackActions";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Footer from "../../elements/Footer/Footer";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import LessonContent from "./LessonContent/LessonContent";
import LessonInformations from "./LessonInformations/LessonInformations";
import Loading from "../../elements/Loading/Loading";
import Menu from "../../elements/Menu/Menu";
import { connect } from "react-redux";
import { useTranslate } from "../../../utils/useTranslate";

const Lesson = ({ auth, setSnack, resetSnack }) => {
  const { t } = useTranslate();
  const { lessonId } = useParams();
  const history = useHistory();

  const [lesson, setLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserAuthorized, setIsUserAuthorized] = useState(true);

  useEffect(() => {
    const retrieveLesson = async () => {
      const { data } = await getLessonById(lessonId);
      await addLessonView(lessonId);

      const handleSnack = (message) => {
        setSnack({
          show: true,
          duration: 4000,
          text: t(message),
          type: "error",
          action: () => {
            resetSnack();
          },
        });
      };

      if (!data?.lesson) {
        handleSnack("LESSON_DONT_EXIST_ERROR");
        return history.push("/searchLessons");
      }

      if (data.lesson.private && auth.user._id !== data.lesson.creator._id) {
        handleSnack("LESSON_NOT_AUTHORIZED_ERROR");
        setIsUserAuthorized(false);
      }

      setLesson(data.lesson);
      setIsLoading(false);
    };

    retrieveLesson();
  }, [auth, lessonId, history, setSnack, resetSnack, t]);

  return (
    <div className="lesson__globalContainer">
      <Menu backgroundColor={"#fff"} />
      <LanguageSelect />
      {isLoading && (
        <div className="lesson__loaderContainer">
          <Loading />
        </div>
      )}
      {!isLoading && lesson && (
        <div className="lesson__background">
          <LessonInformations lesson={lesson} setLesson={setLesson} />
          <LessonContent lesson={lesson} isUserAuthorized={isUserAuthorized} />
        </div>
      )}
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setSnack, resetSnack })(Lesson);
