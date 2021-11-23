import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Loading from "../../../elements/Loading/Loading";
import LessonResult from "./LessonResult/LessonResult";
import { getLessons } from "../../../../services/lessons";
import SearchFilters from "./SearchFilters/SearchFilters";
import "./SearchResults.scss";

const SearchResults = ({ filters, auth }) => {
  const [lessons, setLessons] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [isMoreLessons, setIsMoreLessons] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const retrieveLessons = async () => {
      const results = await getLessons(
        filters || [],
        lessons.length,
        auth.isAuthenticated ? auth.user._id : "null"
      );
      setLessons(results.data.lessons || []);
      setIsMoreLessons(results.data.lessons.length === 5);
      setIsLoading(false);
    };
    const nameFilter = filters?.find((filter) => filter.attribute === "name");
    if (nameFilter) {
      setSearchValue(nameFilter.value);
    }
    retrieveLessons();
  }, []);

  const loadMoreResults = async () => {
    setIsLoading(true);
    const results = await getLessons(
      filters || [],
      lessons.length,
      auth.isAuthenticated ? auth.user._id : "null"
    );
    setLessons([...lessons, ...results.data.lessons]);
    setIsMoreLessons(results.data.lessons.length > 5);
    setIsLoading(false);
  };

  const getTitleValue = () => {
    if (searchValue && lessons.length > 0)
      return `Résultats pour la recherche "${searchValue}"`;
    if (searchValue && lessons.length === 0)
      return `Aucun résultat pour la recherche "${searchValue}"`;
    if (!searchValue) return `Les cours les plus "populaires"`;
  };

  return (
    <>
      <div className="searchResults__header">
        <div className="searchResults__subTitle">Vous voyez actuellement</div>
        <h1 className="searchResults__title">{getTitleValue()}</h1>
      </div>
      {isLoading && <Loading />}

      {!isLoading && lessons.length > 0 && <SearchFilters filters={filters} />}

      <div className="searchResults__globalContainer">
        {lessons.map((lesson) => (
          <LessonResult lesson={lesson} />
        ))}

        {/* case they are more results to load */}
        {!isLoading && isMoreLessons && (
          <div
            className="searchResults__loadMoreResults"
            onClick={() => {
              loadMoreResults();
            }}
          >
            <button className="searchResults__loadMoreResults__button">
              Charger d'avantage
            </button>
          </div>
        )}

        {/* case they are no more results to load */}
        {!isLoading && !isMoreLessons && lessons.length > 0 && (
          <div className="searchResults__noMoreResults">
            <p className="searchResults__noMoreResults__text">
              Tu n'as pas trouvé le cours qu'il te fallait ?
            </p>
            <button className="searchResults__noMoreResults__button">
              Crées le !
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(SearchResults);
