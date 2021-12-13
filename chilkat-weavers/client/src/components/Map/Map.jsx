import React from "react";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Map.scss";
class Map extends Component {
  state = {
    map: {},
  };
  componentDidMount() {
    this.getMap();
  }
  getMap = () => {
    axios
      .get(
        "https://native-land.ca/api/index.php?maps=territories&name=tsimshian,kwakwakawakw,tlingit,haida"
      )
      .then((response) => {
        this.setState({
          map: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <article className="map">
        <h2 className="map__title">Tradition Territories</h2>
        <h3 className="map__subtitle">
          Tsimshian, Tligit, Haida & Kwakwakawakw
        </h3>

        <iframe
          className="map__iframe"
          src="https://native-land.ca/api/embed/embed.html?maps=territories&name=tsimshian,kwakwakawakw,tlingit,haida"
        ></iframe>
        <Link to="https://native-land.ca/" className="map__link">
          native-land
        </Link>
      </article>
    );
  }
}
export default Map;
