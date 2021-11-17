import { useEffect, useState } from "react";

import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import Search from "./SearchFilters/SearchFilters";
import { getSearchFilters, launchSearch } from "../../../utils/searchLessons";
import SearchResults from "./SearchResults/SearchResults";

import SearchLesson from "../../../assets/pictures/test/searchLesson.png";
import "./SearchLessons.scss";

const SearchLessons = (props) => {
  const params = window.location.search;
  const filters = JSON.parse(new URLSearchParams(params).get("filters"));

  const [search, setSearch] = useState({
    name: "",
    degree: [],
    year: [],
    faculty: [],
    institution: "",
    city: [],
  });

  useEffect(() => {
    const searchFilters = getSearchFilters(filters || []);
    setSearch(searchFilters);
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
              Trouvez le cours qu'il vous faut parmis ceux rédigés par la
              communauté
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
                placeholder={"Ex: théorème pythagore"}
              />
              <button type="submit" className="searchLessons__searchButton">
                Chercher
              </button>
            </form>
          </div>
          <div className="searchLessons__resultsContainer">
            <SearchResults filters={filters} />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default SearchLessons;
