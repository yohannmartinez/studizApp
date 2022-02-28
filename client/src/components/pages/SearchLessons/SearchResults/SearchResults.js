import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import Loading from "../../../elements/Loading/Loading";
import LessonResult from "./LessonResult/LessonResult";
import { getLessons } from "../../../../services/lessons";
import SearchFilters from "./SearchFilters/SearchFilters";
import "./SearchResults.scss";
import { useTranslate } from "../../../../utils/useTranslate";
import Button from "../../../elements/Button/Button";

const SearchResults = ({ filters, auth }) => {
  const { t } = useTranslate();
  const history = useHistory();
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
    setIsMoreLessons(results.data.lessons.length === 5);
    setIsLoading(false);
  };

  const getTitleValue = () => {
    if (isLoading) return "LOADING";
    if (filters.length > 0) return `SEARCH_RESULTS_TITLE`;
    if (filters.length === 0) return `SEARCH_RESULTS_MOST_POPULAR`;
  };

  return (
    <>
      <div className="searchResults__header">
        <h1 className="searchResults__title">{t(getTitleValue())}</h1>
        <SearchFilters filters={filters} />
      </div>
      {isLoading && lessons.length === 0 && (
        <div className={"searchResults__globalContainer"}>
          <div className="searchResults__loadingCard"></div>
          <div className="searchResults__loadingCard"></div>
          <div className="searchResults__loadingCard"></div>
        </div>
      )}

      {lessons.length > 0 && (
        <div className="searchResults__globalContainer">
          {lessons.map((lesson) => (
            <LessonResult key={"lesson" + lesson._id} lesson={lesson} />
          ))}

          {/* case they are more results to load */}
          {isMoreLessons && (
            <div
              className="searchResults__loadMoreResults"
              onClick={() => {
                loadMoreResults();
              }}
            >
              <p className="searchResults__noMoreResults__text">
                {t("SEARCH_RESULTS_LOAD_MORE_TITLE")}
              </p>
              {isLoading ? (
                <Loading />
              ) : (
                <Button
                  model={"white"}
                  action={() => {
                    loadMoreResults();
                  }}
                  className="searchResults__loadMoreResults__button"
                >
                  {t("LOAD_MORE")}
                </Button>
              )}
            </div>
          )}

          {/* case they are no more results to load */}
          {!isLoading && !isMoreLessons && lessons.length > 0 && (
            <div className="searchResults__noMoreResults">
              <p className="searchResults__noMoreResults__text">
                {t("SEARCH_RESULTS_NO_MORE_TITLE")}
              </p>
              <Button
                model={"white"}
                className="searchResults__noMoreResults__button"
                action={() => {
                  history.push("/createLesson");
                }}
              >
                {t("SEARCH_RESULTS_NO_MORE_BUTTON")}
              </Button>
            </div>
          )}
        </div>
      )}
      {!isLoading && !isMoreLessons && lessons.length === 0 && (
        <div className="searchResults__noResults">
          <h1 className="searchResults__noResults__title">
            {t("SEARCH_RESULTS_NO_RESULTS")}
          </h1>
          <Button model={"white"}>Créer le cours</Button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(SearchResults);
