import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UnauthenticatedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === false ? (
        <Component {...props} />
      ) : (
        <Redirect to="/profile" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UnauthenticatedRoute);
