import React from "react";
function Movies(props) {
  return (
    <div>
      <h2>Movie : {props.movie}</h2>
      <h4>Genre : {props.genre}</h4>
    </div>
  );
}

export default Movies;
