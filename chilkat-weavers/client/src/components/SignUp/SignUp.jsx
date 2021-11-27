import "./SignUp.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component{
  state = {
    // imgSrc: "",
    // file: null,
    name: "",
    community: "",
    nation: "",
    location: "",
    crest: "",
    age: "",
    teacher: "",
    experience: "",
    blanket: "",
    supply: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
      !this.state.name ||
      !this.state.nation
      ) {
        return false;
      }
      return true;
    };


  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", this.state.file);
    const reader = new FileReader();
    // const url = reader.readAsDataURL(this.state.file);
    // reader.onloadend = (event) => {
    //   this.setState({
    //     imgSrc: [reader.result],
    //   });
    // };

    // formData.append("name", this.state.name);
    // for (let value of formData.values()) {
    //   console.log(value);
    // }
    // const config = {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     },
    //   }
    const newSignup = {
      name: this.state.name,
      community: this.state.community,
      nation: this.state.nation,
      location: this.state.location,
      crest: this.state.crest,
      age: this.state.age,
      teacher: this.state.teacher,
      experience: this.state.experience,
      blanket: this.state.blanket,
      supply: this.state.supply,
    };
    console.log(newSignup, formData); 

  if (this.isFormValid()) {
    axios
      .post(`http://localhost:8082/users/`, newSignup )
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })

      .catch((error) => {
        console.log(error);
      });
    alert("successful upload");
  } else alert("Upload did not complete, please try again");
};


  render() {
    return (
      <article className="signup">
        <h1 className="signup__title">New Weavers Sign-Up</h1>

        <form encType="multipart/form-data" method="post" onSubmit={(this.handleSubmit)} className="signup__form">
          <h2 className="signup__subtitle">Details</h2>
          {/* <label className="signup__label">
            <h3>Upload Profile Picture</h3>
            <img src={this.state.imgSrc} alt="uploaded file" />
            <input
              type="file"
              name="profileImage"
              onChange={this.handleImageChange}
            />
          </label> */}

          <lable className="signup__label">
            <h3>Name</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Name"
            />
          </lable>
          <lable className="signup__label">
            <h3>Community</h3>
            <input
              className="signup__input"
              type="text"
              name="community"
              onChange={this.handleChange}
              value={this.state.community}
              placeholder="Community"
            />
          </lable>

          <lable className="signup__label">
            <h3>Nation</h3>
            <input
              className="signup__input"
              type="text"
              name="nation"
              onChange={this.handleChange}
              value={this.state.nation}
              placeholder="Nation"
            />
          </lable>
          <lable className="signup__label">
            <h3>Location</h3>
            <input
              className="signup__input"
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
              placeholder="Current Approximate Location"
            />
          </lable>
          <lable className="signup__label">
            <h3>Crest</h3>
            <input
              className="signup__input"
              type="text"
              name="crest"
              onChange={this.handleChange}
              value={this.state.crest}
              placeholder="Crest"
            />
          </lable>
          <lable className="signup__label">
            <h3>Age</h3>
            <input
              className="signup__input"
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
              placeholder="age range"
            />
          </lable>
          <lable className="signup__label">
            <h3>Teachers or Mentors</h3>
            <input
              className="signup__input"
              type="text"
              name="teacher"
              onChange={this.handleChange}
              value={this.state.teacher}
              placeholder="Teachers or Mentos"
            />
          </lable>
          <lable className="signup__label">
            <h3>Experience</h3>
            <select
              className="signup__input"
              onChange={this.handleChange}
              value={this.state.experience}
              type="text"
              name="experience"
              defaultValue=""
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Novice">Novice</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
              <option value="Master">Master</option>
            </select>
          </lable>
          <label className="signup__label">
            <h3>
              {" "}
              I have woven a full sized 56" or wider Chilkat dancing blanket"
            </h3>
            <input
              className="signup__input"
              type="radio"
              name="blanket"
              onChange={this.handleChange}
            />
            Yes
          </label>

          <lable className="signup__label">
            <h3>Supply Sources</h3>
            <textarea
              className="signup__input"
              type="text"
              name="supply"
              // value={this.state.name}
              placeholder="where do you get your supplies?"
            />
          </lable>
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
