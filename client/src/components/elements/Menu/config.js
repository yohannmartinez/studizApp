import BookIcon from "../../../assets/pictures/menu/book.svg";
import QuizzIcon from "../../../assets/pictures/menu/quizz.svg";
import TeacherIcon from "../../../assets/pictures/menu/teacher.svg";
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
    name: "QUIZZS",
    subMenus: [
      {
        name: "QUIZZS",
        description: "QUIZZS_DESCRIPTION",
        icon: QuizzIcon,
        link: "/quizz",
      },
    ],
  },
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
