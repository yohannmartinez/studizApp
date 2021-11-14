import "./SearchFilters.scss";
import Input from "../../../elements/Input/Input";
import { useState } from "react";
import { useTranslate } from "../../../../utils/useTranslate";

const SearchFilters = () => {
  const [lessonName, setLessonName] = useState("");
  const { t } = useTranslate();
  return <div className="SearchFilters__container"></div>;
};

export default SearchFilters;
