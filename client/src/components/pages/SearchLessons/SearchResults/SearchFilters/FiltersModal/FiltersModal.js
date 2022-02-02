import Input from "../../../../../elements/Input/Input";
import { degreesToSelectFormat } from "../../../../../../utils/degrees";
import {
  studyFields,
  studyFieldsToSelectFormat,
} from "../../../../../../utils/studyFields";
import { useTranslate } from "../../../../../../utils/useTranslate";
import { getYearsRange } from "../../../../../../utils/years";
import Modal from "../../../../../elements/Modal/Modal";
import SelectInput from "../../../../../elements/SelectInput/SelectInput";

import "./FiltersModal.scss";
import { getCities } from "../../../../../../services/cities";
import { launchSearch } from "../../../../../../utils/searchLessons";

const FiltersModal = ({ filtersList, setShowFilters, changeFiltersValue }) => {
  const { t } = useTranslate();
  const { name, degree, year, studyField, institution, city } = filtersList;

  const onCitySearch = async (inputValue, callback) => {
    if (inputValue === "") callback([]);
    const cities = await getCities(inputValue);
    const formatted_cities = cities.data.cities
      .map((city) => {
        return { label: city.name, value: city.name };
      })
      .filter((city) =>
        city.label.toLowerCase().startsWith(inputValue.toLowerCase())
      );
    callback(formatted_cities);
  };

  return (
    <Modal
      onBackgroundClick={() => {
        setShowFilters(false);
      }}
      height="80vh"
      maxWidth="700px"
      maxHeight="700px"
    >
      <form
        className="modalFilters__container"
        onSubmit={(e) => {
          e.preventDefault();
          launchSearch(filtersList);
        }}
      >
        <h1 className="modalFilters__title">{t("RESULTS_FILTERS")}</h1>
        <p className="modalFilters__subTitle">{t("RESULTS_FILTERS_TEXT")}</p>
        <Input
          value={name}
          inputColor="#9652B6"
          label="LESSON_NAME"
          placeholder={t("SEARCH_LESSON_SEARCH_PLACEHOLDER")}
          onChange={(e) => {
            changeFiltersValue(e.target.value, "name");
          }}
          type="text"
        />
        <SelectInput
          options={degreesToSelectFormat(t)}
          defaultValue={degree}
          label="LESSON_DEGREE"
          onChange={(option) => {
            changeFiltersValue(option, "degree");
          }}
          isSearchable={true}
          isMulti={true}
        />
        <SelectInput
          options={studyFieldsToSelectFormat(t)}
          defaultValue={studyField}
          label="LESSON_STUDY_FIELD"
          onChange={(option) => {
            changeFiltersValue(option, "studyField");
          }}
          isSearchable={true}
          isMulti={true}
        />
        <SelectInput
          options={getYearsRange()}
          defaultValue={year}
          label="LESSON_YEAR"
          onChange={(option) => {
            changeFiltersValue(option, "year");
          }}
          isSearchable={false}
          isMulti={true}
        />
        <Input
          value={institution}
          inputColor="#9652B6"
          label="LESSON_INSTITUTION"
          placeholder={t("LESSON_INSTITUTION_PLACEHOLDER")}
          onChange={(e) => {
            changeFiltersValue(e.target.value, "institution");
          }}
          type="text"
        />
        <SelectInput
          isAsync
          loadOptions={(inputValue, callback) => {
            onCitySearch(inputValue, callback);
          }}
          defaultValue={city}
          onChange={(option) => {
            changeFiltersValue(option ? option.value.toString() : [], "city");
          }}
          label="LESSON_CITY"
          isSearchable
          isMulti={false}
          isClearable={true}
        />
        <button className="modalFilters__button" type="submit">
          Chercher
        </button>
      </form>
    </Modal>
  );
};

export default FiltersModal;
