import "./SignUp.scss";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  state = {
    name: "",
    community: "",
    nation: "",
    crest: "",
    location: "",
    age: "",
    teacher: "",
    experience: "",
    blanket: false,
    supply: "",
    comments: "",
    fb: "",
    instagram: "",
  };
  handleCheckboxChange = (event) => {
    this.setState({
      blanket: !this.state.blanket
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // handleImageChange = (event) => {
  //   console.log("image", event.target.files[0]);
  //   this.setState({
  //     file: event.target.files[0],
  //   });
  // };

  isFormValid = () => {
    // Check if the field is filled
    if (!this.state.name || !this.state.nation) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("profile_img", this.state.file);

    // const reader = new FileReader();
    // const url = reader.readAsDataURL(this.state.file);
    // reader.onloadend = (event) => {
    //   this.setState({
    //     imgSrc: [reader.result],
    //   });
    // };

    // for (let value of formData.values()) {
    //   console.log(value);
    // }
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };

    // console.log(formData);
    const newSignup = {
      name: this.state.name,
      community: this.state.community,
      nation: this.state.nation,
      crest: this.state.crest,
      location: this.state.location,
      age: this.state.age,
      teacher: this.state.teacher,
      experience: this.state.experience,
      blanket: this.state.blanket,
      supply: this.state.supply,
      comments: this.state.comments,
      fb: this.state.fb,
      instagram: this.state.instagram,
    };
    // console.log(newSignup);

    // const data ={objects: [formData, newSignup]};
    // console.log(data);

    if (this.isFormValid()) {
      axios
        .post(`http://localhost:8082/users/`, newSignup)
        .then((response) => {
          this.setState({
            users: response.data,
          });
          alert("successful upload");
          console.log(response.data);
          //history api push
          this.props.history.push(`/${response.data.id}/addphotos`);
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
          {/* <label className="signup__label">
            <h3>Upload Profile Picture</h3>
            <img src={this.state.imgSrc} alt="uploaded file" />
            <input
              type="file"
              name="profile_img"
              onChange={this.handleImageChange}
            />
          </label> */}

          <label className="signup__label">
            <h3>Name</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Name"
            />
          </label>
          <label className="signup__label">
            <h3>Community</h3>
            <input
              className="signup__input"
              type="text"
              name="community"
              onChange={this.handleChange}
              value={this.state.community}
              placeholder="Community"
            />
          </label>

          <label className="signup__label">
            <h3>Nation</h3>
            <input
              className="signup__input"
              type="text"
              name="nation"
              onChange={this.handleChange}
              value={this.state.nation}
              placeholder="Nation"
            />
          </label>
          <label className="signup__label">
            <h3>Crest</h3>
            <input
              className="signup__input"
              type="text"
              name="crest"
              onChange={this.handleChange}
              value={this.state.crest}
              placeholder="Crest"
            />
          </label>
          <label className="signup__label">
            <h3>Location</h3>
            <input
              className="signup__input"
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
              placeholder="Current Approximate Location"
            />
          </label>

          <label className="signup__label">
            <h3>Age</h3>
            <input
              className="signup__input"
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
              placeholder="age range"
            />
          </label>
          <label className="signup__label">
            <h3>Teachers or Mentors</h3>
            <input
              className="signup__input"
              type="text"
              name="teacher"
              onChange={this.handleChange}
              value={this.state.teacher}
              placeholder="Teachers or Mentor"
            />
          </label>
          <label className="signup__label">
            <h3>Experience</h3>
            <select
              className="signup__input"
              onChange={this.handleChange}
              type="text"
              name="experience"
              defaultValue={this.state.experience}
            >
              <option value="Beginner">Beginner</option>
              <option value="Novice">Novice</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
              <option value="Master">Master</option>
            </select>
          </label>
          <label className="signup__label">
            <h3>
              I have woven a full sized 56" or wider Chilkat dancing blanket"
            </h3>
            <input
              className="signup__input"
              type="checkbox"
              name="blanket"
              value={this.state.blanket}
              onChange={this.handleCheckboxChange}
            />
          </label>

          <label className="signup__label">
            <h3>Supply Sources</h3>
            <textarea
              className="signup__input"
              type="text"
              name="supply"
              value={this.state.supply}
              onChange={this.handleChange}
              placeholder="where do you get your supplies?"
            />
          </label>
          <label className="signup__label">
            <h3>Comments</h3>
            <textarea
              className="signup__input"
              type="text"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
              placeholder="what inspires you?"
            />
          </label>
          <h3>Social Media</h3>
          <label className="signup__label">
            <h4>Facebook</h4>
            <input
              className="signup__input"
              type="text"
              name="facebook"
              value={this.state.fb}
              onChange={this.handleChange}
              placeholder="your facebook link"
            />
          </label>
          <label className="signup__label">
            <h4>Instagram</h4>
            <input
              className="signup__input"
              type="text"
              name="instagram"
              value={this.state.instagram}
              onChange={this.handleChange}
              placeholder="your instagram link"
            />
          </label>

          <div className="signup__btnwrapper">
            <Link to="/" className="signup__link">
              <button className="signup__btn">Cancel</button>
            </Link>
            <button className="signup__btn signup__btn--add" type="submit">
              Sign-Up
            </button>
          </div>
        </form>
      </article>
    );
  }
}
export default SignUp;
