import Logo from "../../elements/Logo/Logo";
import { useHistory } from "react-router-dom";
import { useTranslate } from "../../../utils/useTranslate";
import "./NotFound.scss";

const NotFound = () => {
  const { t } = useTranslate();
  const history = useHistory();
  return (
    <div className="notFound__container">
      <Logo fontSize={"0px"} logoHeight={"80px"} />
      <h1 className="notFound__title">{t("PAGE_NOT_FOUND")}</h1>
      <button
        className="notFound__button"
        onClick={() => {
          history.push("/");
        }}
      >
        {t("GO_BACK_HOME")}
      </button>
    </div>
  );
};

export default NotFound;
