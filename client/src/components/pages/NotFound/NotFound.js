import Logo from "../../elements/Logo/Logo";
import { useHistory } from "react-router-dom";
import { useTranslate } from "../../../utils/useTranslate";
import "./NotFound.scss";
import Button from "../../elements/Button/Button";

const NotFound = () => {
  const { t } = useTranslate();
  const history = useHistory();
  return (
    <div className="notFound__container">
      <Logo
        type={"white"}
        action={() => {
          history.push("/");
        }}
      />
      <h1 className="notFound__title">{t("PAGE_NOT_FOUND_TITLE")}</h1>
      <p className="notFound__text">{t("PAGE_NOT_FOUND_TEXT")}</p>
      <Button
        model={"white"}
        action={() => {
          history.push("/");
        }}
      >
        {t("GO_BACK_HOME")}
      </Button>
    </div>
  );
};

export default NotFound;
