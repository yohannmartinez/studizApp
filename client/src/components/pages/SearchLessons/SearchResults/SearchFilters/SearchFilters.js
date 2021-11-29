import { useEffect, useState } from "react";
import { filtersToSelectFormat } from "../../../../../utils/searchLessons";
import { useTranslate } from "../../../../../utils/useTranslate";
import FiltersModal from "./FiltersModal/FiltersModal";
import "./SearchFilters.scss";

const SearchFilters = ({ filters }) => {
  const { t } = useTranslate();

  const [filtersList, setFiltersList] = useState({
    name: "",
    degree: [],
    year: [],
    studyField: [],
    institution: "",
    city: [],
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setFiltersList(filtersToSelectFormat(filters, t));
  }, [filters, t]);

  const changeFiltersValue = (option, name) => {
    setFiltersList({ ...filtersList, [name]: option });
  };

  return (
    <div className="searchFilters__globalContainer">
      <div
        className="searchFilters__showFilters"
        onClick={() => {
          setShowFilters(true);
        }}
      >
        <div>{t("FILTERS")}</div>
        <div className="searchFilters__showFilters__filtersLength">
          {filters.length}
        </div>
      </div>

      {showFilters && (
        <FiltersModal
          filtersList={filtersList}
          setShowFilters={setShowFilters}
          changeFiltersValue={changeFiltersValue}
        />
      )}
    </div>
  );
};

export default SearchFilters;
