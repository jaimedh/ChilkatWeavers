import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditProfile extends Component {
  state = {
    // imgSrc:"",
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
    comments: "",
    fb: "",
    instagram: "",
  };
  componentDidMount() {
    this.getProfilebyId();
  }

  getProfilebyId = () => {
    axios
      .get(`http://localhost:8082/users/${this.props.match.params.id}`)

      .then((response) => {
        console.log(response.data[0]);
        this.setState({
          name: response.data[0].name,
          community: response.data[0].community,
          nation: response.data[0].nation,
          
          crest: response.data[0].crest,
          location: response.data[0].location,
          age: response.data[0].age,
          teacher: response.data[0].teacher,
          experience: response.data[0].experience,
          blanket: response.data[0].blanket,
          supply: response.data[0].supply,
          comments: response.data[0].comments,
          fb: response.data[0].fb,
          instagram: response.data[0].instagram,
        });
      })
      .catch((error) => console.log(error));
  };
  handleCheckboxChange = (event) => {
    this.setState({
      blanket: !this.state.blanket,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    // Check if the field is filled
    if (!this.state.name) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const editProfile = {
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

    if (this.isFormValid()) {
      axios
        .put(
          `http://localhost:8082/users/${this.props.match.params.id}`,
          editProfile
        )
        .then((response) => {
          this.setState({
            profile: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      alert("successful upload");
      this.props.history.push(`/${this.props.match.params.id}/addphotos`);
    } else alert("Upload did not complete, please try again");
  };

  render() {
    return (
      <article className="signup">
        <h1 className="signup__title">Edit Profile</h1>
        <form onSubmit={this.handleSubmit} className="signup__form">
          <h2 className="signup__subtitle">Details</h2>
         

          <label className="signup__label">
            <h3>Name</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
             
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
            />
               <label className="signup__label">
            <h3 className="signup__input-title">Location</h3>
            <input
              className="signup__input"
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
            />
          </label>

          </label>
          <label className="signup__label">
            <h3>Age</h3>
            <input
              className="signup__input"
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
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
          <label className="signup__label signup__blanket">         
            <h3 className="signup__blanket-title">
              I have woven a full sized 56" or wider Chilkat dancing blanket"
            </h3>          
            <input
              className="signup__check"
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
              onChange={this.handleChange}
              value={this.state.supply}
            />
          </label>
          <label className="signup__label">
            <h3 className="signup__input-title">Comments</h3>
            <textarea
              className="signup__input signup__text"
              type="text"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
           
            />
          </label>


          <h3>Social Media</h3>
          <label className="signup__label">
            <h4>Facebook</h4>
            <textarea
              className="signup__input"
              type="text"
              name="facebook"
              value={this.state.fb}
              onChange={this.handleChange}
              
            />
          </label>
          <label className="signup__label">
            <h4>Instagram</h4>
            <textarea
              className="signup__input"
              type="text"
              name="instagram"
              value={this.state.instagram}
              onChange={this.handleChange}
              placeholder="your facebook link"
            />
          </label>
          <div className="signup__btnwrapper">
            <Link
              to={`/${this.props.match.params.id}/profile`}
              className="signup__link"
            >
              <button className="signup__btn">Cancel</button>
            </Link>
            <button
              className="signup__btn signup__btn--add"
              type="submit"
              value="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </article>
    );
  }
}
export default EditProfile;
