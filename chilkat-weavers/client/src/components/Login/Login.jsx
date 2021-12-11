import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FB from "../../assets/icons/Icon-facebook.svg";
import Insta from "../../assets/icons/Icon-instagram.svg";



class Login extends Component {
  state = {
    loggedIn: false,
    profile: null,
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8082/auth/profile`, { withCredentials: true })
      .then((response) => {
          console.log(response.data);
        this.setState({
          loggedIn: true,
          profile: response.data,
        });
        return response.data.id;
      })
      .then((id) => {
        axios
          .get(`http://localhost:8082/users/${id}`)
          .then((response) => {
            console.log(response);
          });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { profile, loggedIn } = this.state;
    return (
      <section className="login">
        <h2 className="login__title">Profile</h2>
        {!loggedIn ? (
          <a className="btn" href="http://localhost:8082/auth">
            login{" "}
          </a>
        ) : (
          <a className="btn" href="http://localhost:8082/auth/logout">
            logout
          </a>
        )}
        {profile && ( 
        <article className="profile">
          <>
            <p>Hello {profile.name}</p>

            <Link to={"/" + profile.id  + "/edit"} >Edit Profile</Link>
          </>

 <div className="profile__container">
<img className="profile__img" src= {`http://localhost:8082${profile.file}`} alt="profile"/>

</div>
<div className="profile__info-wrapper">
     <h1 className="profile__name">{profile.name}</h1>
     <p className="profile__nation">Nation: <span className="profile__info--span">{profile.nation}</span></p>
     <p className="profile__info">Crest: <span className="profile__info--span">{profile.crest}</span></p>
     <p className="profile__info">Community: <span className="profile__info--span">{profile.community}</span></p>
     <p className="profile__info">Current Location: <span className="profile__info--span">{profile.location}</span></p>
     <p className="profile__info">Age: <span className="profile__info--span">{profile.age}</span></p>
     <p className="profile__info">Teacher: <span className="profile__info--span">{profile.teacher}</span></p>
     <p className="profile__info">Experience: <span className="profile__info--span">{profile.experience}</span></p>
     {parseInt(profile.blanket) ? <p className="profile__info">I have woven a blanket</p> : ""}
      <p className="profile__info">Suppliers: <span className="profile__info--span">{profile.supply}</span></p>
     <p className="profile__info profile__comments">Comments: <span className="profile__info--span">{profile.comments}</span></p>
     <h3 className="profile__subtitle">Social Media Links</h3>
     <div className="profile__social-container">
     
     <a className="profile__link"href={profile.fb} target="_blank" rel="noreferrer"><img className="profile__icon" src={FB} alt= "facebook logo"/></a>
     <a className="profile__link" href={profile.instagram} target="_blank" ><img className="profile__icon" src={Insta} alt= "Instagram logo"/></a> 
        {/* <Link className="profile__edit"to={`/${this.props.match.params.id}/edit`}>Edit</Link> */}
     </div>

</div>   


 </article>


        )}
      </section>
    );
  }
}
export default Login;
