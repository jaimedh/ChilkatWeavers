import axios from "axios";
import { Component } from "react";
import "./Profile.scss";
import FB from "../../assets/icons/Icon-facebook.svg";
import Insta from "../../assets/icons/Icon-instagram.svg";



class Profile extends Component {
    state= {     
        profile: null   

    }
  
    getProfilebyId = (id) => {
        console.log('id', id);
        const authToken = sessionStorage.getItem("clientAuthToken");
        axios
        .get(`http://localhost:8082/users/${id}`,
        {headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
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
    <div className="profile__info-wrapper">
            <h1 className="profile__name">{this.state.profile.name}</h1>
            <h2 className="profile__nation"><span className="profile__nation--span">Nation:</span> {this.state.profile.nation}</h2>
            <p className="profile__info">Crest: {this.state.profile.crest}</p>
            <p className="profile__info">Community: {this.state.profile.community}</p>
            <p className="profile__info">Current Location: {this.state.profile.location}</p>
            <p className="profile__info">Age: {this.state.profile.age}</p>
            <p className="profile__info">Teacher: {this.state.profile.teacher}</p>
            <p className="profile__info">Experience: {this.state.profile.experience}</p>
            {/* <p className="profile__info"> {this.state.profile.blanket}</p> */}
            <p className="profile__info">Suppliers: {this.state.profile.supply}</p>
            <p className="profile__info profile__comments">Comments: {this.state.profile.comments}</p>
            <h3 className="profile__subtitle">Social Media Links</h3>
            <div className="profile__social-container">
            
            <a className="profile__link"href={this.state.profile.fb} target="_blank"><img className="profile__icon" src={FB} alt= "facebook logo"/></a>
            <a className="profile__link" href={this.state.profile.instagram} target="_blank"><img className="profile__icon" src={Insta} alt= "Instagram logo"/></a> 
            </div>
    </div>       

        </article>
    )
  }
}
export default Profile;