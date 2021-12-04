import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./basics.scss";

//functions
import { setCurrentUser, logoutUser } from "./actions/authActions";
import setAuthToken from "./services/setAuthToken";
import PrivateRoute from "./components/private-route/PrivateRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute/UnauthenticatedRoute";
import ScrollToTop from "./utils/scrollToTop";

//redux
import { store } from "./store";

//pages
import CreateLesson from "./components/pages/CreateLesson/CreateLesson";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import Landing from "./components/pages/Landing/Landing";
import Lesson from "./components/pages/Lesson/Lesson";
import Login from "./components/pages/Login/Login";
import SearchLessons from "./components/pages/SearchLessons/SearchLessons";

//elements
import Snack from "./components/elements/Snack/Snack";
import { connect } from "react-redux";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Snack />
      <div className="App" id="App">
        <Switch>
          <Route exact path="/" component={Landing} />

          {/* auth routes */}
          <UnauthenticatedRoute exact path="/login" component={Login} />
          <UnauthenticatedRoute exact path="/register" component={Login} />

          <UnauthenticatedRoute
            exact
            path="/forgotPassword"
            component={ForgotPassword}
          />

          <PrivateRoute exact path="/createLesson" component={CreateLesson} />

          <Route exact path="/searchLessons" component={SearchLessons} />
          <Route exact path="/lesson/:lessonId" component={Lesson} />
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
