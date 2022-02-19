import { useEffect, useState } from "react";

import Button from "../../../../elements/Button/Button";
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
      <Button
        model={"basic"}
        action={() => {
          setShowFilters(true);
        }}
      >
        <div className="searchFilters__showFilters">
          <div>{t("FILTERS")}</div>
          <div className="searchFilters__showFilters__filtersLength">
            {filters.length}
          </div>
        </div>
      </Button>

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
