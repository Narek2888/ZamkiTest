import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import routes from "./routes.json";
import logo from "../../assets/logo.png";
import basketPng from "../../assets/basket.png";
import burgerbtn from "../../assets/burger.png";
import HomeCategories from "../HomeCategories/HomeCategories";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);

  const navRef = useRef();
  const closeMenuRef = useRef();

  const { routes: appRoutes } = routes;

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, [size]);

  const showNavbar = () => {
    navRef.current.classList.toggle("width")
    closeMenuRef.current.classList.add("closeMenu")
  }

  return (
    <div className="header">
      <div className="header__up">
        <div className="header__up__burger">
          <div className="header__up__burger__burgerMenu">
            <img src={burgerbtn} alt="burgerMenu"  onClick={showNavbar}/>
            {size < 1024 && (<HomeCategories navRef={navRef} closeMenuRef={closeMenuRef}/>)}
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
