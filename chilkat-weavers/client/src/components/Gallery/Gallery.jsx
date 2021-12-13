import FB from "../../assets/icons/facebook.png";
import Insta from "../../assets/icons/instagram.png";
import axios from "axios";

import "./Gallery.scss";
import { Component } from "react";

class Gallery extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    axios
      .get(`http://localhost:8082/images`)
      .then((response) => {
        this.setState({
          photos: response.data,
          activeWeaver: response.data[0],
        });
      })
      .catch((error) => console.log("error getting photos", error));
  };

  render() {
    return (
      <article className="gallery">
        <h2 className="gallery__title">Weavers</h2>
        <ul className="gallery__list">
          {this.state.photos.map((photo) => {
            return (
              <li key={photo.id} className="gallery__item">
                <div className="gallery__img-wrapper">
                  <img
                    className="gallery__img"
                    src={`http://localhost:8082${photo.file}`}
                    alt="weavers"
                  />
                </div>
                <div className="gallery__info-wrapper">
                  <p className="gallery__info">{photo.info} </p>
                  <p className="gallery__comments">{photo.comments}</p>
                  <p className="gallery__contact">{photo.links}</p>
                  <div className="gallery__social-wrapper">
                    <a
                      className="gallery__link"
                      href={photo.Facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="gallery__icon"
                        src={FB}
                        alt="facebook logo"
                      />
                    </a>

                    <a
                      className="gallery__link"
                      href={photo.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="gallery__icon"
                        src={Insta}
                        alt="Instagram logo"
                      />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="gallery__notes">
          Thank you to everyone who contributed to this site.
        </p>
      </article>
    );
  }
}
export default Gallery;
