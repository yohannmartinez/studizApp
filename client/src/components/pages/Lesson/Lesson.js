import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getLessonById } from "../../../services/lessons";

import LessonInformations from "./LessonInformations/LessonInformations";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import "./Lesson.scss";

const Lesson = () => {
  const { lessonId } = useParams();

  const [lesson, setLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const retrieveLesson = async () => {
      const { data } = await getLessonById(lessonId);
      console.log(data.lesson);
      setLesson(data.lesson);
      setIsLoading(false);
    };

    retrieveLesson();
  }, [lessonId]);

  return (
    <div className="lesson__globalContainer">
      <Menu backgroundColor={"#F3F0FC"} />
      <LanguageSelect />
      {isLoading && "loading"}
      {!isLoading && !lesson && "no lesson"}
      {!isLoading && lesson && <LessonInformations lesson={lesson} />}
    </div>
  );
};

export default Lesson;
