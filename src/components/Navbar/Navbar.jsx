import { Link } from "react-router-dom";
import "./Navbar.scss";
import routes from "./routes.json";
import logo from "../../assets/logo.png";
import basketPng from "../../assets/basket.png";
import burgerbtn from "../../assets/burger.png";

const Navbar = () => {
  const { routes: appRoutes } = routes;

  return (
    <div className="header">
      <div className="header__up">
        <div className="header__up__burger">
          <div className="header__up__burger__burgerMenu">
            <img src={burgerbtn} alt="burgerMenu" />
          </div>

          <div className="header__up__burger__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="header__up__right">
          <div className="header__up__right__input">
            <input
              type="text"
              className="header__up__right__input__text"
              placeholder="Поиск"
            />
          </div>

          <div className="header__up__right__basket">
            <Link to="/karzina">
              <img src={basketPng} alt="basket" />
            </Link>
          </div>
        </div>
      </div>

      <div className="header__down">
        {appRoutes.length &&
          appRoutes.map((route, index) => {
            const { name, path } = route;
            return (
              <Link
                className="header__down__item"
                key={`${name}-${path}-${index}`}
                to={path}
              >
                {name}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;
