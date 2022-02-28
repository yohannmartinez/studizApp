import { useHistory } from "react-router";
import { useTranslate } from "../../../../../utils/useTranslate";
import Button from "../../../Button/Button";
import "./Creator.scss";

const Creator = ({ creator }) => {
  const { t } = useTranslate();
  const history = useHistory();

  return (
    <div className="lessonDetails__creator__container">
      <div className="lessonDetails__creator__imageContainer">
        <div className="lessonDetails__creator__separator"></div>
        <div
          className="lessonDetails__creator__image"
          style={{
            backgroundImage: `url('${creator.profileImage}')`,
          }}
        ></div>
        <div className="lessonDetails__creator__separator"></div>
      </div>
      <h1 className="lessonDetails__creator__name">
        {creator.firstname} {creator.lastname}
      </h1>
      <Button
        model={"basic"}
        action={() => {
          history.push(`/user/${creator._id}`);
        }}
      >
        {t("PROFILE_SEE_USER")}
      </Button>
    </div>
  );
};

export default Creator;
