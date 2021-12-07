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
          console.log(response.data);
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
        <h2 className="gallery__title"></h2>
        <ul className="gallery__list">
          {this.state.photos.map((photo) => {
            return (
              <li key={photo.id} className="gallery__item">
                  <div className="gallery__img-wrapper">
                <img
                  className="weavers__img"
                  src={`http://localhost:8082${photo.file}`}
                  alt="weavers"
                />
                </div>
                <div className="gallery__info-wrapper">
                  <p className="gallery__info">{photo.info} </p>
                  <p className="gallery__comments">{photo.comments}</p>
                </div>
                <div className="gallery_carousel">
                    

                </div>
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
}
export default Gallery;
