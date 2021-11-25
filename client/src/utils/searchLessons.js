/**
 * launchSearch - redirect to search page with given filters to show results
 * @param {Array} searchFilters
 */
export const launchSearch = (searchFilters) => {
  const useFullFilters = removeEmptyInputs(searchFilters);
  const filters = buildFilters(useFullFilters);
  window.location.href = `/searchLessons?filters=${JSON.stringify(filters)}`;
};

//function for launchSearch function
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

//function for launchSearch function
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
    studyField: [],
    institution: "",
    city: [],
  };

  filters.map(({ attribute, value }) => {
    return (filtersSample[attribute] = value);
  });

  return filtersSample;
};

/**
 *
 * @param {array} filters parsed filters from url search
 * @param {*} t translate function
 * @returns
 */
export const filtersToSelectFormat = (filters, t) => {
  const allFilters = {
    degree: [],
    year: [],
    studyField: [],
    institution: "",
    city: [],
  };
  const textFilters = ["name", "institution"];
  const translatableFilters = ["degree", "studyField"];

  filters.map((filter) => {
    //check if filter is in the filters list, if not just pass
    if (Object.keys(allFilters).includes(filter.attribute)) {
      if (textFilters.includes(filter.attribute)) {
        //if filter is text search just put the value
        return (allFilters[filter.attribute] = filter.value);
      } else {
        const isTranslatable = translatableFilters.includes(filter.attribute);
        //if filter isn't text search, we have to format value
        if (Array.isArray(filter.value)) {
          //if value are multiples, map to all value
          const value = [];
          filter.value.map((item) => {
            value.push(
              isTranslatable
                ? { label: t(item), value: t(item) }
                : { label: item, value: item }
            );
          });
          return (allFilters[filter.attribute] = value);
        } else {
          //if value are simple, just convert value
          return (allFilters[filter.attribute] = isTranslatable
            ? {
                label: t(filter.value),
                value: t(filter.value),
              }
            : {
                label: filter.value,
                value: filter.value,
              });
        }
      }
    }
  });

  return allFilters;
};
