import { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <article className="signup">
        <h1 className="signup__title">New Weavers Sign-Up</h1>
        <form onSubmit className="signup__form">
          <h2 className="signup__subtitle">Details</h2>
          <lable className="signup__label">
            <h3>Name</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              // value={this.state.name}
              placeholder="Name"
            />
          </lable>
          <lable className="signup__label">
            <h3>Community</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              // value={this.state.name}
              placeholder="Community"
            />
          </lable>
          
          <lable className="signup__label">
            <h3>Nation</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              // value={this.state.name}
              placeholder="Nation"
            />
          </lable>
          <lable className="signup__label">
            <h3>Location</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              // value={this.state.name}
              placeholder="Current Approximate Location"
            />
          </lable>
          <lable className="signup__label">
            <h3>Crest</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              // value={this.state.name}
              placeholder="Crest"
            />
          </lable>
          <lable className="signup__label">
            <h3>Teachers or Mentors</h3>
            <input
              className="signup__input"
              type="text"
              name="name"
              // value={this.state.name}
              placeholder="Teachers or Mentos"
            />
          </lable>
          <lable className="signup__label">
            <h3>Experience</h3>
            <select
              className="signup__input"
            //   onChange={this.handleChange}
              type="text"
              name="experience"
              defaultValue="">
                  <option value="Beginner">Beginner</option>
                  <option value="Novice">Novice</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                  <option value="Master">Master</option>
                  </select>

            </lable>    
            <lable className="signup__label">
            <h3>Age</h3>
            <input
              className="signup__input"
              type="text"
              name="age"
              // value={this.state.name}
              placeholder="age range"
            />
          </lable>
          <lable className="signup__label">
            <h3>Supply Sources</h3>
            <input
              className="signup__input"
              type="text"
              name="supplies"
              // value={this.state.name}
              placeholder="where do you get your supplies?"
            />
          </lable>
          <lable className="signup__label">
            <h3></h3>
            <input
              className="signup__input"
              type="text"
              name="age"
              // value={this.state.name}
              placeholder="age range"
            />
          </lable>
          
          

        </form>
      </article>
    );
  }
}
export default SignUp;
