import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <nav className="header__container">
          <section className="header__direction">
        
          <div className="header__weavers">
            <NavLink to="/" className="header__link">Chilkat Weaving
            </NavLink>
            <NavLink to="/weavers" className="header__link">
              Current Weavers
            </NavLink>
          </div>
          <div className="header__logo-wrapper">
          <NavLink to="/">
            <img className="header__logo" src={Logo} alt="Chilkat Logo" />
          </NavLink>
          </div>
        </section>
        <div className="header__wrapper">
          <NavLink to="/signup" className="header__link">
            <button className="header__btn">Weavers Sign-Up</button>
          </NavLink>
          <NavLink to="/" className="header__link">
            <p className="header__tab">Login</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
