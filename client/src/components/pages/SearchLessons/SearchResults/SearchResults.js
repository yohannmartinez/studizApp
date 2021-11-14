import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getLessons } from "../../../../services/lessons";

const SearchResults = ({ filters, auth }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const retrieveLessons = async () => {
      const results = await getLessons(
        filters || [],
        lessons.length,
        auth.isAuthenticated ? auth.user._id : "null"
      );
      setLessons(results.data.lessons || []);
    };
    retrieveLessons();
  }, []);

  return (
    <div>
      {lessons.map((lesson) => (
        <div>{lesson.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(SearchResults);
