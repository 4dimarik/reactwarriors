import React from "react";
import ReactDOM from "react-dom";

import muviesData from "./muviesData";

const movie = muviesData[0];

console.log(movie);

function Image(props) {
  console.log(props);
  return (
    <p>
      <img src={props.src} alt={props.alt} />
    </p>
  );
}

function MovieItem(props) {
  const {
    data: { title, vote_average, poster_path }
  } = props;
  return (
    <div>
      <Image src={poster_path} alt={title} />
      <p>{title}</p>
      <p>{vote_average}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
