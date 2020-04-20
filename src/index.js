import React from "react";
import ReactDOM from "react-dom";

import muviesData from "./muviesData";

const movie = muviesData[0];

function Image(props) {
  return (
    <p>
      <img src={props.src} alt={props.alt} />
    </p>
  );
}
/*
function MovieItem(props) {
  const { data: { title, vote_average, poster_path }} = props;
  return (
    <div>
      <Image src={poster_path} alt={title} />
      <p>{title}</p>
      <p>{vote_average}</p>
    </div>
  );
}
//
*/

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }
  render() {
    const {
      data: { title, vote_average, poster_path, overview }
    } = this.props;
    return (
      <div>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <button
          type="button"
          onClick={() => {
            this.setState({
              show: true
            });
          }}
        >
          show
        </button>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
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
