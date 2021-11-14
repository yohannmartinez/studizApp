const TEXT_FILTERS = ["name", "description", "institution"];
const NON_TEXT_FILTERS = ["degree", "faculty", "city", "year", "country"];

const getSearchFilters = (filters) => {
  let formattedFilters = [];

  const parsedFilters = JSON.parse(filters.toString());

  //separate text search filters from non text search filters
  const textSearchFilters = parsedFilters.filter((filter) =>
    TEXT_FILTERS.includes(filter.attribute)
  );
  const nonTextSearchFilters = parsedFilters.filter((filter) =>
    NON_TEXT_FILTERS.includes(filter.attribute)
  );

  //format all filters for search
  const textFilters = formatTextFilters(textSearchFilters);
  if (Object.keys(textFilters).length !== 0) {
    formattedFilters.push(textFilters);
  }
  const nonTextFilters = formatNonTextFilters(nonTextSearchFilters);

  return {
    searchFilters: [...formattedFilters, ...nonTextFilters],
    isTextFilters: Object.keys(textFilters).length !== 0,
    isNonTextFilters: nonTextFilters.length > 0,
  };
};

const formatTextFilters = (filters) => {
  // goal with text search is to make a big sentence with it, mongoose will create a fit score automatically
  // ex : if you had two filters "Cat" and "Dog"
  // you put them together to make "Cat dog"

  let textSearch = {};
  if (filters.length > 0) {
    let entireTextSearch = "";
    filters.map((filter) => {
      entireTextSearch += `${filter.value} `;
    });
    textSearch = { $text: { $search: entireTextSearch } };
  }
  return textSearch;
};

const formatNonTextFilters = (filters) => {
  // value of non text filters can be an array or a string because we can have multiples filters for same attribute
  // ex: we can filter year width one value "2019" or have multiple values like ["2019", "2020"]
  const formattedFilters = [];
  filters.map(({ attribute: filterAttribute, value: filterValue }) => {
    if (Array.isArray(filterValue)) {
      //if filterValue is an array, create $or array with all values
      const values = [];
      filterValue.map((item) => {
        values.push({ [filterAttribute]: item });
      });
      formattedFilters.push({ $or: values });
    } else {
      //if values is not an array, just send the value
      formattedFilters.push({
        [filterAttribute]: filterValue,
      });
    }
  });
  return formattedFilters;
};

module.exports = { getSearchFilters };
