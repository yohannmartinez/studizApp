//get years range from 50 years ago for react-select input
export const getYearsRange = () => {
  const currentYear = new Date().getFullYear();
  return Array.from(
    { length: (currentYear - 50 - currentYear) / -1 + 1 },
    (_, i) => {
      return {
        value: String(currentYear + i * -1),
        label: String(currentYear + i * -1),
      };
    }
  );
};
