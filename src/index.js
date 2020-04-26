import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const movie = {
  title: "Avangers: Infinity War",
  vote_average: 8.5,
  image:
    "https://image.tmdb.org/t/p/w533_and_h300_bestv2/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
  overview:
    "As the Avanger best movie in ever who can slave this chapter rocken rolc baby Groot As the Avanger best movie in ever who can slave this chapter rocken rolc baby Groot"
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }
  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };
  heandleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>

        <div className={"wrapper--box"}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.heandleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like!
          </button>
        </div>

        {/*если стейт шов равно тру, то показывать  овервью, если нет то показывать ничего*/}
        {this.state.show === true ? <p>{overview}</p> : null}
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

ReactDOM.render(<App />, document.getElementById("root"));
