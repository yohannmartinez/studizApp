/**
 * launchSearch - redirect to search page with given filters to show results
 * @param {Array} searchFilters
 */

import SearchLessons from "../components/pages/SearchLessons/SearchLessons";

export const launchSearch = (searchFilters) => {
  const useFullFilters = removeEmptyInputs(searchFilters);
  const filters = buildFilters(useFullFilters);
  window.location.href = `/searchLessons?filters=${JSON.stringify(filters)}`;
};

const removeEmptyInputs = (searchInputs) => {
  const inputs = searchInputs;
  Object.entries(searchInputs).map(([attribute, value]) => {
    if (typeof value === "string") {
      value.replace(/\s+/g, "") === "" && delete inputs[attribute];
    } else if (Array.isArray(value)) {
      value.length === 0 && delete inputs[attribute];
    }
  });
  return inputs;
};

const buildFilters = (searchInputs) => {
  let filters = [];
  Object.entries(searchInputs).map(([attribute, value]) => {
    return filters.push({
      attribute,
      value,
    });
  });
  return filters;
};

/**
 * getSearchFilters - transform filters from url to filters for search
 * @param {Array} searchFilters
 */
export const getSearchFilters = (filters) => {
  const filtersSample = {
    name: "",
    degree: [],
    year: [],
    faculty: [],
    institution: "",
    city: [],
  };

  filters.map(({ attribute, value }) => {
    return (filtersSample[attribute] = value);
  });

  return filtersSample;
};
