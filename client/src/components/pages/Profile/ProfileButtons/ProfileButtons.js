import { FaUserGraduate } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { RiHeartsFill } from "react-icons/ri";
import { useTranslate } from "../../../../utils/useTranslate";
import Button from "../../../elements/Button/Button";

import "./ProfileButtons.scss";

const ProfileButtons = ({ setShowUserLessons, setShowUserLikedLessons }) => {
  const { t } = useTranslate();
  const buttons = [
    {
      title: "PROFILE_MY_INFO_TITLE",
      description: "PROFILE_MY_INFO_DESC",
      buttonText: "PROFILE_MY_INFO_BUTTON",
      image: <FaUserGraduate className="profileButtons__icon" />,
      action: () => {
        alert(
          "Studiz fait tout pour intégrer cette fonctionnalité au plus vite"
        );
      },
    },
    {
      title: "PROFILE_MY_LESSONS_TITLE",
      description: "PROFILE_MY_LESSONS_DESC",
      buttonText: "PROFILE_MY_LESSONS_BUTTON",
      image: <GiWhiteBook className="profileButtons__icon" />,
      action: () => {
        setShowUserLessons(true);
      },
    },
    {
      title: "PROFILE_MY_LIKED_LESSONS_TITLE",
      description: "PROFILE_MY_LIKED_LESSONS_DESC",
      buttonText: "PROFILE_MY_LIKED_LESSONS_BUTTON",
      image: <RiHeartsFill className="profileButtons__icon" />,
      action: () => {
        setShowUserLikedLessons(true);
      },
    },
  ];
  return (
    <div className="profileButtons__container">
      {buttons.map((button) => (
        <div className="profileButtons__button">
          <h1 className="profileButtons__title">{t(button.title)}</h1>
          <span className="profileButtons__description">
            {t(button.description)}
          </span>
          <Button
            model={"basic"}
            action={button.action}
            className="profileButtons__actionButton"
          >
            {t(button.buttonText)}
          </Button>
          {button.image}
        </div>
      ))}
    </div>
  );
};

export default ProfileButtons;
