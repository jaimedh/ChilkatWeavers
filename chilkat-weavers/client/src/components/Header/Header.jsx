import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.svg";

function Header() {
    return (
        <header className="header">
            <nav className="header__container">
                <Link to="/"> <img className="header__logo"src={Logo} alt="Chilkat Logo"/></Link>
                <div className="header__wrapper">
                <Link to="/"className="header__link"><p className="header__info">Info</p></Link>
                <Link to="/" className="header__Link"><button className="header__btn">Weavers Sign-up</button></Link>
            </div></nav>
        </header>
    )
}
export default Header;