import axios from "axios";
import { Component } from "react";
import "./Profile.scss";
import ProfilePic from "../../assets/images/michelle.jpeg";
class Profile extends Component {
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
    
    .then(
        response => {
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
        })
                
    })
        .catch((error) => console.log(error));
};

  render() { 
    return (
        <article className="profile">
        <div className="profile__container">
      <img className="profile__img" src= { ProfilePic } alt="profile"/>
    </div>
    <div className="profile__info">
            <h1 className="profile__name">{this.state.name}</h1>
            <h2 className="profile__nation">{this.state.nation}</h2>
            <p className="profile__crest">Crest: {this.state.crest}</p>
            <p className="profile__communtiy">Community: {this.state.community}</p>
            <p className="profile__location">Current Location: {this.state.location}</p>
            <p className="profile__facebook"></p>
            <p className="profile__insta"></p>
            <p className="profile__twitter"></p>
    </div>       

        </article>
    )
  }
}
export default Profile;