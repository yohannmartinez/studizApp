import { useEffect, useState } from "react";

import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import {
  filtersToSelectFormat,
  getSearchFilters,
  launchSearch,
} from "../../../utils/searchLessons";
import SearchResults from "./SearchResults/SearchResults";

import "./SearchLessons.scss";
import { useTranslate } from "../../../utils/useTranslate";

const SearchLessons = (props) => {
  const { t } = useTranslate();
  const params = window.location.search;
  const filters = JSON.parse(new URLSearchParams(params).get("filters"));

  const [search, setSearch] = useState({
    name: "",
    degree: [],
    year: [],
    studyField: [],
    institution: "",
    city: [],
  });

  useEffect(() => {
    setSearch(filtersToSelectFormat(filters || [], t));
  }, []);

  const handleChangeInput = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const startSearch = (e) => {
    e.preventDefault();
    launchSearch(search);
  };

  return (
    <div className="searchLessons__globalContainer">
      <Menu backgroundColor={"#fff"} />
      <LanguageSelect />
      <PageWrapper>
        <div className="searchLessons__container">
          <div className="searchLessons__header">
            <h1 className="searchLessons__header__title">
              {t("SEARCH_LESSON_TITLE")}
            </h1>
            <div className="searchLessons__header__imageContainer"></div>
            <form
              className="searchLessons__searchBar"
              onSubmit={(e) => {
                startSearch(e);
              }}
            >
              <input
                name="name"
                className="searchLessons__input"
                value={search.name}
                onChange={handleChangeInput}
                placeholder={t("SEARCH_LESSON_SEARCH_PLACEHOLDER")}
              />
              <button type="submit" className="searchLessons__searchButton">
                {t("SEARCH")}
              </button>
            </form>
          </div>
          <div className="searchLessons__resultsContainer">
            <SearchResults filters={filters || []} />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default SearchLessons;
