import BookIcon from "../../../assets/pictures/menu/book.svg";
import QuizIcon from "../../../assets/pictures/menu/quizz.svg";
import FindTeacherIcon from "../../../assets/pictures/menu/find.svg";

const categoriesList = [
  { name: "HOME", subMenus: [], link: "/" },
  {
    name: "LESSONS",
    subMenus: [
      {
        name: "CREATE_LESSON",
        description: "CREATE_LESSON_DESCRIPTION",
        icon: BookIcon,
        link: "/createLesson",
      },
      {
        name: "SEARCH_LESSON",
        description: "SEARCH_LESSON_DESCRIPTION",
        icon: FindTeacherIcon,
        link: "/searchLessons",
      },
    ],
  },
  {
    name: "QUIZ",
    subMenus: [
      {
        name: "QUIZ",
        description: "QUIZ_DESCRIPTION",
        icon: QuizIcon,
        link: "/quiz",
      },
    ],
  },
  { name: "FEEDBACKS", subMenus: [], link: "/feedbacks" },
  // {
  //   name: "PRIVATE_INSTRUCTOR",
  //   subMenus: [
  //     {
  //       name: "BECOME_INSTRUCTOR",
  //       description: "BECOME_INSTRUCTOR_DESCRIPTION",
  //       icon: TeacherIcon,
  //     },
  //     {
  //       name: "FIND_INSTRUCTOR",
  //       description: "FIND_INSTRUCTOR_DESCRIPTION",
  //       icon: FindTeacherIcon,
  //     },
  //   ],
  // },
];

export default categoriesList;
