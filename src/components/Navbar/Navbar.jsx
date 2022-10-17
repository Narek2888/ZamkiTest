import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import routes from "./routes.json";
import logo from "../../assets/logo.svg";
import basketPng from "../../assets/basket.png";
import burgerbtn from "../../assets/burger.png";
import HomeCategories from "../HomeCategories/HomeCategories";
import { useDispatch, useSelector } from "react-redux";
import { searchHandler } from "../../redux/features/shop/shopSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartAmount, totalAmount, searchInput } = useSelector(
    (state) => state.shop
  );
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
    navRef.current.classList.toggle("width");
    closeMenuRef.current.classList.add("closeMenu");
  };

  const onSearchHandler = (e) => {
    dispatch(searchHandler(e.target.value));
  };

  return (
    <div className="header">
      <div className="header__up">
        <div className="header__up__burger">
          <div className="header__up__burger__burgerMenu">
            <img src={burgerbtn} alt="burgerMenu" onClick={showNavbar} />
            {size < 1024 && (
              <HomeCategories navRef={navRef} closeMenuRef={closeMenuRef} />
            )}
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
              value={searchInput}
              onChange={onSearchHandler}
            />
          </div>

          <div className="header__up__right__basket">
            {cartAmount > 0 ? <div className="circle">{cartAmount}</div> : null}
            {cartAmount > 0 ? (
              <div className="header__up__right__basket__hoverBox">
                {cartAmount} товара <br />
                {totalAmount} рублей
              </div>
            ) : null}
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
              <NavLink
                activeClassName="is-active"
                className="header__down__item"
                key={`${name}-${path}-${index}`}
                to={path}
              >
                {name}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;
