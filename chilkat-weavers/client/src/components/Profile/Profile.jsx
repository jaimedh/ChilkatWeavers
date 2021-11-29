import axios from "axios";
import { Component } from "react";

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
        console.log(response.data);
        
        
        this.setState({
            
            name: response.data.name,
            community: response.data.community,
            nation: response.data.nation,
            location: response.data.location,
            crest: response.data.crest,
            age: response.data.age,
            teacher: response.data.teacher,
            experience: response.data.experience,
            blanket: response.data.blanket,
            supply: response.data.supply
        })
        
        
    })
        .catch((error) => console.log(error));
};

  render() { 
    return (
        <article className="profile">
            <h1 className="profile__name">{this.state.name}</h1>

        </article>
    )
  }
}
export default Profile;