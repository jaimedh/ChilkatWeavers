import { Component } from "react";
import axios from "axios";

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
  isFormValid = () => {
    // Check if the field is filled
    if (
      !this.state.file
      ) {
        return false;
      }
      return true;
    };
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", this.state.file);
    const reader = new FileReader();
    const url = reader.readAsDataURL(this.state.file);
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

    if (this.isFormValid()) {
      axios
        .put(`http://localhost:8082/images/${this.props.match.params.id}`, formData)
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
      
    } else alert("Upload did not complete, please try again");
  };

  render() {
    console.log(this.props.history);
    return (
      <article className="signup">
        <h1 className="signup__title">New Weavers Sign-Up</h1>

        <form
          encType="multipart/form-data"
          method="post"
          onSubmit={this.handleSubmit}
          className="signup__form"
        >
          <h2 className="signup__subtitle">Details</h2>
          <label className="signup__label">
            <h3>Upload Profile Picture</h3>
            <img src={this.state.imgSrc} alt="uploaded file" />
            <input
              type="file"
              name="profile_img"
              onChange={this.handleImageChange}
            />
          </label>

          <button className="signup__btn signup__btn--add" type="submit">
            add photo
          </button>
        </form>
      </article>
    );
  }
}
export default AddingPhotos;
