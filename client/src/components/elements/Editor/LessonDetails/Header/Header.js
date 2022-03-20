import { useState } from "react";
import { connect } from "react-redux";
import { $CombinedState } from "redux";
import { useTranslate } from "../../../../../utils/useTranslate";

import Button from "../../../Button/Button";
import ContentTable from "../../../ContentTable/ContentTable";
import Modal from "../../../Modal/Modal";

import "./Header.scss";

const Header = ({ lesson, auth, setShowContentTable }) => {
  const { t } = useTranslate();

  return (
    <>
      <div className="lessonDetails__header__container">
        <div className="lessonDetails__header__leftContainer">
          <div className="lessonDetails__header__flexContainer">
            <div className="lessonDetails__header__imageContainer">
              <div
                className="lessonDetails__header__image"
                style={{
                  backgroundImage: `url('${lesson.creator.profileImage}')`,
                }}
              ></div>
            </div>
            <div className="lessonDetails__header__textContainer">
              <h1 className="lessonDetails__header__lessonName">
                {lesson.name}
              </h1>
              <p className="lessonDetails__header__lessonCreator">
                {t("WRITTEN_BY") + " "}@{lesson.creator.pseudo}
              </p>
            </div>
          </div>
        </div>
        <div className="lessonDetails__header__rightContainer">
          <Button
            model={"basic"}
            action={() => {
              setShowContentTable(true);
            }}
          >
            {t("CONTENT_TABLE")}
          </Button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Header);
