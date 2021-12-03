import axios from "axios";
import { Component } from "react";
import "./Profile.scss";

class Profile extends Component {
    state= {     
        profile: null   

    }
  
    getProfilebyId = (id) => {
        console.log('id', id);
        axios
        .get(`http://localhost:8082/users/${id}`
        )
    
    .then((response) => {
        console.log(response.data[0]);
                
        this.setState({     
             profile: response.data[0], 
            
        })
                 
    })
        .catch((error) => console.log("error getting user",error));
};
componentDidMount() {
    const {id}=this.props.match.params;
    this.getProfilebyId(id);
   
}

  render() { 
      console.log(this.state.profile);
      if(!this.state.profile) {
          return<h1>Loading</h1>
      }
    return (
        <article className="profile">
        <div className="profile__container">
      <img className="profile__img" src= {`http://localhost:8082${this.state.profile.file}`} alt="profile"/>

    </div>
    <div className="profile__info">
            {/* <h1 className="profile__name">{this.state.profile.name}</h1> */}
            <h2 className="profile__nation">{this.state.profile.nation}</h2>
            <p className="profile__crest">Crest: {this.state.profile.crest}</p>
            <p className="profile__communtiy">Community: {this.state.profile.community}</p>
            <p className="profile__location">Current Location: {this.state.profile.location}</p>
            <p className="profile__age">Age: {this.state.profile.age}</p>
            <p className="profile__age">Teacher: {this.state.profile.teacher}</p>
            <p className="profile__supply">Supply: {this.state.profile.supply}</p>
            <p className="profile__facebook">facebook:{this.state.profile.fb}</p>
            <p className="profile__insta">Instagram: {this.state.profile.instagram}</p>
            
    </div>       

        </article>
    )
  }
}
export default Profile;