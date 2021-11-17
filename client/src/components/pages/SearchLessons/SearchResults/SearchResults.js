import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getLessons } from "../../../../services/lessons";
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
      <div className="searchResults__globalContainer">
        {lessons.map((lesson) => (
          <div
            className="searchResults__container"
            onClick={() => {
              console.log(lesson);
            }}
          >
            {lesson.name}
          </div>
        ))}

        {/* case they are more results to load */}
        {!isLoading && isMoreLessons && (
          <div
            className="searchResults__container"
            onClick={() => {
              loadMoreResults();
            }}
          >
            load more
          </div>
        )}

        {/* case they are no more results to load */}
        {!isLoading && !isMoreLessons && lessons.length > 0 && (
          <div className="searchResults__container">no more results</div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(SearchResults);
