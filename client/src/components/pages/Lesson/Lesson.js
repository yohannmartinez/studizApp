import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { addLessonView, getLessonById } from "../../../services/lessons";

import LessonInformations from "./LessonInformations/LessonInformations";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import "./Lesson.scss";
import LessonContent from "./LessonContent/LessonContent";
import Footer from "../../elements/Footer/Footer";

const Lesson = () => {
  const { lessonId } = useParams();

  const [lesson, setLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const retrieveLesson = async () => {
      const { data } = await getLessonById(lessonId);
      await addLessonView(lessonId);
      setLesson(data.lesson);
      setIsLoading(false);
    };

    retrieveLesson();
  }, [lessonId]);

  return (
    <div className="lesson__globalContainer">
      <Menu backgroundColor={"#fff"} />
      <LanguageSelect />
      {isLoading && "loading"}
      {!isLoading && !lesson && "no lesson"}
      {!isLoading && lesson && (
        <div className="lesson__background">
          <LessonInformations lesson={lesson} setLesson={setLesson} />
          <LessonContent lesson={lesson} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Lesson;
