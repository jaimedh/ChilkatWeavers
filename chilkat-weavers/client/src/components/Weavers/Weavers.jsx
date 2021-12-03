import axios from "axios";
import "./Weavers.scss";
import { Component } from "react";
import FB from "../../assets/icons/Icon-facebook.svg";
import Insta from "../../assets/icons/Icon-instagram.svg";

class Weavers extends Component {
  state = {
    weavers: [],
  };

  componentDidMount() {
    this.getWeavers();
  }

  getWeavers = () => {
    axios
      .get(`http://localhost:8082/users`)
      .then((response) => {
        this.setState({
          weavers: response.data,
          activeWeaver: response.data[0],
        });
      })
      .catch((error) => console.log("error getting weavers", error));
  };

  render() {
    console.log(this.state.weavers);

    return (
      <article className="weavers">
        <ul className="weavers__list">
          <h2 className="weavers__title"></h2>
          {this.state.weavers.map((weaver) => {
            return (
              <li key={weaver.id} className="weavers__item">
                <div className="weavers__img-container">
                  <img
                    className="weavers__img"
                    src={`http://localhost:8082${weaver.file}`}
                    alt="weavers"
                  />
                </div>
                <section className="weavers__container">
                  <h2 className="weavers__name">{weaver.name}</h2>
                  <p className="weavers__nation">Nation:
                    <span className="weavers__nation--span">
                      {weaver.nation}
                    </span>
                  </p>
                  <p className="weavers__info">Crest:
                      <span className="weavers__nation--span">
                        {weaver.crest}
                        </span>
                        </p>
                  <p className="weavers__info">Community: 
                  <span className="weavers__nation--span">
                  {weaver.community}</span></p>
                  <p className="weavers__info">
                    Current Location: 
                    <span className="weavers__nation--span"> 
                    {weaver.location}
                    </span></p>
                  <p className="weavers__info">Age: 
                  <span className="weavers__nation--span">
                  {weaver.age}</span></p>
                  <p className="weavers__info">Teacher: 
                  <span className="weavers__nation--span">
                  {weaver.teacher}
                  </span></p>
                  <p className="weavers__info">
                    Experience: 
                    <span className="weavers__nation--span">
                    {weaver.experience}
                    </span>
                  </p>
                  {/* <p className="weavers__info"> {weaver.blanket}</p> */}
                  <p className="weavers__info">Suppliers: {weaver.supply}</p>
                  <p className="weavers__info weavers__comments">
                    Comments: {weaver.comments}
                  </p>
                </section>
                <section className="weavers__social-container">
                  <h3 className="weavers__subtitle">Social Media Links</h3>
                  <div>
                    <a
                      className="weavers__link"
                      href={weaver.fb}
                      target="_blank"
                    >
                      <img
                        className="weavers__icon"
                        src={FB}
                        alt="facebook logo"
                      />
                    </a>
                    <a
                      className="weavers__link"
                      href={weaver.instagram}
                      target="_blank"
                    >
                      <img
                        className="profile__icon"
                        src={Insta}
                        alt="Instagram logo"
                      />
                    </a>
                  </div>
                </section>
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
}

export default Weavers;
