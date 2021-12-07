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
    console.log("image", event.target.files[0]);
    this.setState({
      file: event.target.files[0],
    });
  };
  
  // isFormValid = () => {
  //   // Check if the field is filled
  //   if (
  //     !this.state.file
  //     ) {
  //       return false;

  //     }
  //     return true;
  //   };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", this.state.file);
    const reader = new FileReader();
    // const url = reader.readAsDataURL(this.state.file);
    reader.onloadend = (event) => {
      this.setState({
        imgSrc: [reader.result],
      });
    };

    for (let value of formData.values()) {
      console.log(value);
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    console.log(formData);

    // if (this.isFormValid()) {
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
        console.log(response.data);
        this.props.history.push(`/${this.props.match.params.id}/profile`);
      })

      .catch((error) => {
        console.log(error);
      });

    // } else alert("Upload did not complete, please try again");
  };

  render() {
    console.log(this.props.history);
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
            {/* <h3>Upload Profile Picture</h3> */}
            <img className="add-photo__img" src={logo} alt="default photo" />
            {/* <img src={this.state.imgSrc} alt="uploaded file" /> */}
            <input className="add-photo__input"
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
        <Link className="add-photo__link"to={`/${this.props.match.params.id}/profile`} >Skip</Link>  
        </form>
      </article>
    );
  }
}
export default AddingPhotos;
