import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.svg";

function Header() {
    return (
        <header className="header">
            <nav className="header__container">
                <div className="header__logo-wrapper">
                       <p className="header__name">Chilkat Weaving</p> 
                <Link to="/"> <img className="header__logo"src={Logo} alt="Chilkat Logo"/></Link>
            
                </div>
                <div className="header__wrapper">
                
                <Link to="/" className="header__Link"><button className="header__btn">Weavers Sign-Up</button></Link>
            </div></nav>
        </header>
    )
}
export default Header;