import "./Profile.scss";

import { getUserLessons, getUserLikedLessons } from "../../../services/lessons";
import { useEffect, useState } from "react";

import Footer from "../../elements/Footer/Footer";
import Loading from "../../elements/Loading/Loading";
import Menu from "../../elements/Menu/Menu";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import ProfileButtons from "./ProfileButtons/ProfileButtons";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import SideContainer from "./SideContainer/SideContainer";
import UserInfos from "./ProfileContents/UserInfos/UserInfos";
import UserLessons from "./ProfileContents/UserLessons/UserLessons";
import { connect } from "react-redux";
import { getUserById } from "../../../services/user";
import { useTranslate } from "../../../utils/useTranslate";

const Profile = ({ auth }) => {
  const { t } = useTranslate();
  const [user, setUser] = useState(null);
  const [userLessons, setUserLessons] = useState(null);
  const [userLikedLessons, setUserLikedLessons] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showUserInfos, setShowUserInfos] = useState(false);
  const [showUserLessons, setShowUserLessons] = useState(false);
  const [showUserLikedLessons, setShowUserLikedLessons] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = await getUserById(auth.user._id);
      const retrievedUserLessons = await getUserLessons(auth.user._id);
      const retrievedUserLikedLessons = await getUserLikedLessons(
        auth.user._id
      );
      setUser(currentUser.data.user);
      setUserLessons(retrievedUserLessons.data.lessons);
      setUserLikedLessons(retrievedUserLikedLessons.data.lessons);
      setLoading(false);
    };
    getCurrentUser();
  }, [auth]);

  return (
    <div className="profile__globalContainer">
      <Menu backgroundColor={"#fff"} />

      {!loading && showUserInfos && (
        <SideContainer
          closeAction={() => {
            setShowUserInfos(false);
          }}
        >
          <UserInfos />
        </SideContainer>
      )}

      {!loading && showUserLessons && (
        <SideContainer
          closeAction={() => {
            setShowUserLessons(false);
          }}
        >
          <UserLessons
            lessons={userLessons}
            title={"PROFILE_MY_LESSONS_TITLE"}
          />
        </SideContainer>
      )}

      {!loading && showUserLikedLessons && (
        <SideContainer
          closeAction={() => {
            setShowUserLikedLessons(false);
          }}
        >
          <UserLessons
            lessons={userLikedLessons}
            title={"PROFILE_MY_LIKED_LESSONS_TITLE"}
          />
        </SideContainer>
      )}

      <PageWrapper>
        {loading && (
          <div className="profile__loadingContainer">
            <h1 className="profile__loadingTitle">{t("LOADING")}</h1>
            <Loading />
          </div>
        )}

        {!loading && (
          <>
            <ProfileHeader user={user} />
            <ProfileButtons
              setShowUserInfos={setShowUserInfos}
              setShowUserLessons={setShowUserLessons}
              setShowUserLikedLessons={setShowUserLikedLessons}
            />
          </>
        )}
      </PageWrapper>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Profile);
