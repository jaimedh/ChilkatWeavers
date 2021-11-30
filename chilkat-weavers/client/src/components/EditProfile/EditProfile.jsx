import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditProfile extends Component {
    state= {
        // imgSrc:"",
        // file: null,
        name:"",
        community:"",
        nation:"",
        location:"",
        crest:"",
        age:"",
        teacher:"",
        experience:"",
        blanket:"",
        supply:""
    }
    componentDidMount() {
        this.getProfilebyId();
    }

    getProfilebyId = () => {
        axios
        .get(`http://localhost:8082/users/${this.props.match.params.id}`
        )
    
    .then((response) => {
        console.log(response.data[0]);
        this.setState({
            name: response.data[0].name,
            community: response.data[0].community,
            nation: response.data[0].nation,
            location: response.data[0].location,
            crest: response.data[0].crest,
            age: response.data[0].age,
            teacher: response.data[0].teacher,
            experience: response.data[0].experience,
            blanket: response.data[0].blanket,
            supply: response.data[0].supply
        });
        
    })
        .catch((error) => console.log(error));
};
 
handleChange = (event) => {
  // const eventRequired = event.target.name 
  this.setState({
      [event.target.name]: event.target.value,
      
  })
 }
// handleImageChange = (event) => {
// console.log("image", event.target.files[0]);
//   this.setState({
// file:event.target.files[0],
//   })
// }

    handleSubmit =(event) => {
        event.preventDefault();
    //     const formData = new FormData();
    //     formData.append('profileImage',this.state.file);
    //     const reader = new FileReader();
    // const url = reader.readAsDataURL(this.state.file);
    // reader.onloadend = (event) => {
    //   this.setState({
    //     imgSrc: [reader.result]
    //   });
    // };

    //     formData.append ('name', this.state.name);
    //     for (let value of formData.values()) {
    //       console.log(value);
    //     }
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     },
        //   }

      //  const editProfile = {
      //   name: this.state.name,
      //   community: this.state.community,
      //   nation: this.state.nation,
      //   location: this.state.location,
      //   crest: this.state.crest,
      //   age: this.state.age,
      //   teacher: this.state.teacher,
      //   experience: this.state.experience,
      //   blanket: this.state.blanket,
      //   supply: this.state.supply
      //  }
          
    };
    // editProfile() {
    // axios
    //  .put(
    //      , editSignUp
    //  )
    //  .then((response) => {
    //      this.setState({
    //          profile: response.data,
    //      });
    //  })
    //  .catch((error) => {
    //     console.log(error);
    //   });
    // }


  render() {
    return (
      <article className="signup">
        <h1 className="signup__title">Edit Profile</h1>
        <form onSubmit={this.handleSubmit} className="signup__form">
          <h2 className="signup__subtitle">Details</h2>
          {/* <label className="signup__label">
            <h3>Upload Profile Picture</h3>
            <img src={this.state.imgSrc} alt="uploaded file" />
            <input type="file" name="profileImage" onChange={this.handleImageChange} />
            </label> */}
           
          <label className="signup__label">
            <h3>Name</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              // placeholder="Name"
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
              defaultValue={this.state.experience}>
                   
                  <option value="Beginner">Beginner</option>
                  <option value="Novice">Novice</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                  <option value="Master">Master</option>
                  </select> 
            </label>    
            {/* <label className="signup__label">
                <h3> I have woven a full sized 56" or wider Chilkat dancing blanket"</h3>
                <input  className="signup__input" 
                type="radio"
                name="blanket"
                onChange={this.handleChange}
                value={this.state.blanket}
                />Yes
                </label>   */}
          
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
          <div className="signup__btnwrapper">
              <Link to="/" className="signup__link">
                <button className="signup__btn">Cancel</button>
              </Link>
              <button
                className="signup__btn signup__btn--add"
                type="submit" value="submit"
              >
                Sign-Up
              </button>
            </div>
          
          

        </form>
      </article>
    );
  }
}
export default EditProfile;
