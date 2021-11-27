import "./Hero.scss";
import dancing from "../../assets/images/dancing.JPG";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <article className="hero">
            {/* <h1 className="hero__title">Chilkat Weavers Today</h1> */}
          <section className="hero__image"></section>
          <a href="https://instagram.com/sydneyakagiphoto" target="_blank" className="hero__link"> photographer: @SydneyAkagiPhoto </a>
        </article>
    )
}
export default Hero;