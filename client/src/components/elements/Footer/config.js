const pages_fr = [
  {
    name: "Global",
    links: [
      { name: "Accueil", link: "/" },
      { name: "Feedbacks", link: "/feedbacks" },
      { name: "Connexion/profil", link: "/login" },
    ],
  },
  {
    name: "Cours",
    links: [
      { name: "Créer un cours", link: "/createLesson" },
      { name: "Rechercher un cours", link: "/searchLessons" },
    ],
  },
  {
    name: "Quiz",
    links: [
      { name: "Créer un quiz", link: "/createQuiz" },
      { name: "Parcourir les quiz", link: "/quiz" },
    ],
  },
];

const pages_en = [
  {
    name: "Global",
    links: [
      { name: "Home", link: "/" },
      { name: "Feedbacks", link: "/feedbacks" },
      { name: "Log In / Profile", link: "/login" },
    ],
  },
  {
    name: "Lessons",
    links: [
      { name: "Create Lesson", link: "/createLesson" },
      { name: "Search Lessons", link: "/searchLessons" },
    ],
  },
  {
    name: "Quiz",
    links: [
      { name: "Create Quiz", link: "/createQuiz" },
      { name: "Browse Quizzes", link: "/quiz" },
    ],
  }
]

export const getPages = (language) => {
  switch (language) {
    case "en":
      return pages_en;
    case "fr":
      return pages_fr;
    default:
      return pages_fr;
  }
};