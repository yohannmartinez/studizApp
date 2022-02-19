export const getDetails = (t, lesson) => {
  return [
    {
      title: t("LESSON_PRIVATE"),
      content: t(lesson.private ? "PRIVATE" : "NO_PRIVATE"),
      icon: "lock",
    },
    {
      title: t("LESSON_DEGREE"),
      content: t(lesson.degree),
      icon: "graduation-cap",
    },
    {
      title: t("LESSON_STUDY_FIELD"),
      content: t(lesson.studyField),
      icon: "user-graduate",
    },
    { title: t("LESSON_YEAR"), content: lesson.year, icon: "calendar" },
    {
      title: t("LESSON_DETAILS_INSTITUTION"),
      content: lesson.institution,
      icon: "school",
    },
    {
      title: t("LESSON_DETAILS_CITY"),
      content: lesson.city.toLowerCase(),
      icon: "map-signs",
    },
  ];
};
