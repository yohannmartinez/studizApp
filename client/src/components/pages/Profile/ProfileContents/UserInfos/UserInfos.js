import "./UserInfos.scss";

import { useEffect, useState } from "react";

import Loading from "../../../../elements/Loading/Loading";
import { connect } from "react-redux";
import { getUserById } from "../../../../../services/user";
import { useTranslate } from "../../../../../utils/useTranslate";

const UserInfos = ({ auth }) => {
  const { t } = useTranslate();
  const [isLoading, setIsLoading] = useState(true);
  const [userInfos, setUserInfos] = useState(null);

  const informationsToShow = [
    { title: "PSEUDO", element: "pseudo" },
    { title: "FIRSTNAME", element: "firstname" },
    { title: "LASTNAME", element: "lastname" },
    { title: "EMAIL", element: "email" },
    { title: "PHONE_NUMBER", element: "phoneNumber" },
    { title: "SPONSOR_CODE", element: "sponsorCode" },
  ];

  useEffect(() => {
    const getUser = async () => {
      const retrievedUser = await getUserById(auth.user._id);
      console.log(retrievedUser);
      setUserInfos(retrievedUser.data.user);
    };
    getUser();
    setIsLoading(false);
  }, [auth]);

  return (
    <div>
      <h1 className="userInfos__title">{t("PROFILE_MY_INFO_TITLE")}</h1>
      {isLoading && (
        <div className="userInfos__loading">
          <Loading />
        </div>
      )}

      {userInfos &&
        !isLoading &&
        informationsToShow.map((info) => (
          <div className="userInfos__element">
            <b>{t(info.title)} :</b> {userInfos[info.element]}
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(UserInfos);
