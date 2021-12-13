import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import FB from "../../assets/icons/Icon-facebook.svg";
import Insta from "../../assets/icons/Icon-instagram.svg";



class Profile extends Component {
    state= {     
        profile: null   

    }
  
    getProfilebyId = (id) => {
        axios
        .get(`http://localhost:8082/users/${id}`)
        
       
    
    .then((response) => {      
        this.setState({     
             profile: response.data[0], 
            
        })
                 
    })
        .catch((error) => console.log("error getting user",error));
};
componentDidMount() {
    const {id} = this.props.match.params;
    this.getProfilebyId(id);
   
}

  render() { 
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
            <p className="profile__nation">Nation: <span className="profile__info--span">{this.state.profile.nation}</span></p>
            <p className="profile__info">Crest: <span className="profile__info--span">{this.state.profile.crest}</span></p>
            <p className="profile__info">Community: <span className="profile__info--span">{this.state.profile.community}</span></p>
            <p className="profile__info">Current Location: <span className="profile__info--span">{this.state.profile.location}</span></p>
            <p className="profile__info">Age: <span className="profile__info--span">{this.state.profile.age}</span></p>
            <p className="profile__info">Teacher: <span className="profile__info--span">{this.state.profile.teacher}</span></p>
            <p className="profile__info">Experience: <span className="profile__info--span">{this.state.profile.experience}</span></p>
            {parseInt(this.state.profile.blanket) ? <p className="profile__info">I have woven a blanket</p> : ""}
             <p className="profile__info">Suppliers: <span className="profile__info--span">{this.state.profile.supply}</span></p>
            <p className="profile__info profile__comments">Comments: <span className="profile__info--span">{this.state.profile.comments}</span></p>
            <h3 className="profile__subtitle">Social Media Links</h3>
            <div className="profile__social-container">
            
            <a className="profile__link"href={this.state.profile.fb} target="_blank" rel="noreferrer"><img className="profile__icon" src={FB} alt= "facebook logo"/></a>
            <a className="profile__link" href={this.state.profile.instagram} target="_blank" rel="noreferrer"><img className="profile__icon" src={Insta} alt= "Instagram logo"/></a> 
               <Link className="profile__edit"to={`/${this.props.match.params.id}/edit`}>Edit</Link>
            </div>

    </div>   

 
        </article>
    )
  }
}
export default Profile;