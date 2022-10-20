import "./SearchLessons.scss";

import {
  filtersToSelectFormat,
  launchSearch,
} from "../../../utils/searchLessons";
import { useEffect, useState } from "react";

import Button from "../../elements/Button/Button";
import DecorativeCircle from "../../elements/DecorativeCircle/DecorativeCircle";
import Footer from "../../elements/Footer/Footer";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import SearchResults from "./SearchResults/SearchResults";
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
  }, [filters, t]);

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
              <DecorativeCircle
                type={"border"}
                size={"20px"}
                top={"-40px"}
                left={"40%"}
              />
              <DecorativeCircle
                type={"default"}
                size={"14px"}
                bottom={"-40px"}
                left={"-60px"}
              />
              <DecorativeCircle
                type={"default"}
                size={"12px"}
                bottom={"-70px"}
                right={"-10px"}
              />
              {t("SEARCH_LESSON_TITLE")}
            </h1>
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
              />
              <Button model="dark" type="submit">
                {t("SEARCH")}
              </Button>
            </form>
          </div>
          <div className="searchLessons__resultsContainer">
            <SearchResults filters={filters || []} />
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default SearchLessons;
