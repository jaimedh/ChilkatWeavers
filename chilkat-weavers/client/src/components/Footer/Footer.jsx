import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__container"> 
            <div className="footer__info-wrapper">
            <h4 className="footer__contact"> Jaime Hunt,</h4> 
            <p>Tsimshian</p> 
            <p>Web Developer</p>
            
            <Link to="hunt.healing@gmail.com" className="footer__email">email</Link>
            </div>
            
               
           </section> 
        </footer>
    );

    
}
export default Footer;