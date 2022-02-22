import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUserLessons } from "../../../services/lessons";
import { getUserById } from "../../../services/user";
import { useTranslate } from "../../../utils/useTranslate";
import Loading from "../../elements/Loading/Loading";
import Menu from "../../elements/Menu/Menu";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Footer from "../../elements/Footer/Footer";
import "./Profile.scss";
import ProfileButtons from "./ProfileButtons/ProfileButtons";

const Profile = ({ auth }) => {
  const { t } = useTranslate();
  const [user, setUser] = useState(null);
  const [userLessons, setUserLessons] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = await getUserById(auth.user._id);
      const retrieveUserLessons = await getUserLessons(auth.user._id);
      setUser(currentUser.data.user);
      setUserLessons(retrieveUserLessons.data.lessons);
      setLoading(false);
    };
    getCurrentUser();
  }, []);

  return (
    <div className="profile__globalContainer">
      <Menu backgroundColor={"#fff"} />
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
            <ProfileButtons />
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
