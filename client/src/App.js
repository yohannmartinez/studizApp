import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import jwt_decode from "jwt-decode";
import "./basics.scss";

//functions
import { setLanguage } from "./actions/languageActions";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import setAuthToken from "./services/setAuthToken";
import PrivateRoute from "./components/private-route/PrivateRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute/UnauthenticatedRoute";
import ScrollToTop from "./utils/scrollToTop";
import RouterListener from "./RouterListener";

//redux
import { store } from "./store";

//pages
import CreateLesson from "./components/pages/CreateLesson/CreateLesson";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import Landing from "./components/pages/Landing/Landing";
import LegalMentions from "./components/pages/Legals/LegalMentions/LegalMentions";
import Lesson from "./components/pages/Lesson/Lesson";
import Login from "./components/pages/Login/Login";
import PrivacyPolicy from "./components/pages/Legals/PrivacyPolicy/PrivacyPolicy";
import Profile from "./components/pages/Profile/Profile";
import NotFound from "./components/pages/NotFound/NotFound";
import SearchLessons from "./components/pages/SearchLessons/SearchLessons";
import Register from "./components/pages/Register/Register";
import TermsOfUse from "./components/pages/Legals/TermsOfUse/TermOfUse";

//elements
import Snack from "./components/elements/Snack/Snack";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  store.dispatch(setLanguage(decoded.userLanguage));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Snack />
      <div className="App" id="App">
        <RouterListener />
        <Switch>
          <Route exact path="/" component={Landing} />

          {/* auth routes */}
          <UnauthenticatedRoute exact path="/login" component={Login} />
          <UnauthenticatedRoute exact path="/register" component={Register} />

          <UnauthenticatedRoute
            exact
            path="/forgotPassword"
            component={ForgotPassword}
          />

          <PrivateRoute exact path="/createLesson" component={CreateLesson} />
          <PrivateRoute exact path="/profile" component={Profile} />

          <Route exact path="/searchLessons" component={SearchLessons} />
          <Route exact path="/lesson/:lessonId" component={Lesson} />

          {/* legal */}
          <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
          <Route exact path="/termsOfUse" component={TermsOfUse} />
          <Route exact path="/legalMentions" component={LegalMentions} />

          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);
