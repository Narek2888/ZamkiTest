import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import routes from "./routes.json";
import logo from "../../assets/logo.svg";
import basketPng from "../../assets/basket.png";
import burgerbtn from "../../assets/burger.png";
import HomeCategories from "../HomeCategories/HomeCategories";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSearchResult,
  searchHandler,
} from "../../redux/features/shop/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { searchInput } = useSelector((state) => state.search);
  const { cardAmount, totalAmount } = useSelector((state) => state.card);
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
    if (window.location.pathname === "/")
      dispatch(searchHandler(e.target.value));
  };

  const handelDoInitial = () => {
    dispatch(removeSearchResult());
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
            <Link to="/" onClick={handelDoInitial}>
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
            {cardAmount > 0 ? <div className="circle">{cardAmount}</div> : null}
            {cardAmount > 0 ? (
              <div className="header__up__right__basket__hoverBox">
                <p className="header__up__right__basket__hoverBox__psc">
                  {" "}
                  {cardAmount} товара
                </p>
                <p className="header__up__right__basket__hoverBox__price">
                  {totalAmount} руб
                </p>
              </div>
            ) : null}
            <Link to="/basket">
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
                onClick={handelDoInitial}
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
