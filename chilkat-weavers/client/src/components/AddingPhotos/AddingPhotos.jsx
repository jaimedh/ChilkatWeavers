import { Component } from "react";
import "./AddingPhotos.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/logo.svg";

class AddingPhotos extends Component {
  state = {
    imgSrc: "",
    file: null,
  };

  handleImageChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", this.state.file);
    const reader = new FileReader();
    reader.onloadend = (event) => {
      this.setState({
        imgSrc: [reader.result],
      });
    };

    for (let value of formData.values()) {
      console.log(value);
    }

    axios
      .put(
        `http://localhost:8082/images/${this.props.match.params.id}`,
        formData
      )
      .then((response) => {
        this.setState({
          users: response.data,
        });
        alert("successful upload");
        this.props.history.push(`/${this.props.match.params.id}/profile`);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <article className="add-photo">
        <h1 className="add-photo__title">Upload a Profile Picture</h1>

        <form
          encType="multipart/form-data"
          method="post"
          onSubmit={this.handleSubmit}
          className="add-photo__form"
        >
          <label className="add-photo__label">
            <img className="add-photo__img" src={logo} alt="default" />
            <input
              className="add-photo__input"
              type="file"
              accept="image/*"
              name="profile_img"
              onChange={this.handleImageChange}
            />
          </label>
          <div className="add-photos__btn-wrapper">
            <button className="add-photo__btn" type="submit">
              submit photo
            </button>
          </div>
          <Link
            className="add-photo__link"
            to={`/${this.props.match.params.id}/profile`}
          >
            Skip
          </Link>
        </form>
      </article>
    );
  }
}
export default AddingPhotos;
