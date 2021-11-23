import { useEffect, useState } from "react";
import { degreesToSelectFormat } from "../../../../../utils/degrees";
import { filtersToSelectFormat } from "../../../../../utils/searchLessons";
import { useTranslate } from "../../../../../utils/useTranslate";
import { getYearsRange } from "../../../../../utils/years";
import Modal from "../../../../elements/Modal/Modal";
import SelectInput from "../../../../elements/SelectInput/SelectInput";
import "./SearchFilters.scss";

const SearchFilters = ({ filters }) => {
  const { t } = useTranslate();

  const [filtersList, setFiltersList] = useState({
    degree: [],
    year: [],
    faculty: [],
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
        <div>Filtres</div>
        <div className="searchFilters__showFilters__filtersLength">
          {filters.length}
        </div>
      </div>

      {showFilters && (
        <Modal
          onBackgroundClick={() => {
            setShowFilters(false);
          }}
        >
          <div
            onClick={() => {
              console.log(filtersList);
            }}
          >
            coucou
          </div>
          <SelectInput
            options={degreesToSelectFormat(t)}
            defaultValue={filtersList.degree}
            onChange={(option) => {
              changeFiltersValue(option, "degree");
            }}
            isSearchable={true}
            isMulti={true}
          />
          <SelectInput
            options={getYearsRange(t)}
            defaultValue={filtersList.year}
            onChange={(option) => {
              changeFiltersValue(option, "year");
            }}
            isSearchable={false}
            isMulti={true}
          />
        </Modal>
      )}
    </div>
  );
};

export default SearchFilters;
