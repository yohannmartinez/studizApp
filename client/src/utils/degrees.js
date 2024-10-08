export const degrees = [
  "DEUST",
  "DCG",
  "DOCTORATE",
  "MBA",
  "MS",
  "M2",
  "M1",
  "PROFESSIONAL_LICENSE",
  "L3",
  "L2",
  "L1",
  "DUT",
  "BTS",
  "BP_JEPS",
  "BP",
  "CAP",
  "SENIOR_YEAR",
  "FIRST_GRADE",
  "SECOND_GRADE",
  "THIRD_GRADE",
  "FOURTH_GRADE",
  "FIFTH_GRADE",
  "SIXTH_GRADE",
];

export const degreesToSelectFormat = (t) => {
  return Array.from(degrees, (degree) => ({
    value: degree,
    label: t(degree),
  }));
};
