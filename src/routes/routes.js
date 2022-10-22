import React from "react";
import { Route } from "react-router-dom";
import { useMemo } from "react";
import { Contacts, Home, New } from "../pages";
import Basket from "../pages/Basket/Basket";
import LockProduction from "../pages/LockProduction/LockProduction";
import MakeAnOrder from "../components/BasketSection/MakeAnOrder/MakeAnOrder";
import ManufacturerPage from "../pages/Partners/ManufacturerPage";
import About from "../pages/About/About";
import Delivery from "../pages/Delivery/Delivery";
import Partners from "../pages/Partners/Partners";
import HomePageItem from "../components/HomePageItem/HomePageItem";

export const routes = [
  {
    path: "/",
    name: "main",
    component: Home,
  },

  {
    path: "/about",
    name: "about",
    component: About,
  },

  {
    path: "/novniki",
    name: "novinki",
    component: New,
  },

  {
    path: "/partners",
    name: "partners",
    component: ManufacturerPage,
  },

  {
    path: "/dostavka",
    name: "dostavka",
    component: Delivery,
  },

  {
    path: "/oplata",
    name: "oplata",
    component: LockProduction,
  },

  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },

  {
    path: "/karzina",
    name: "basket",
    component: Basket,
  },
  {
    path: "/karzina/aformitzakaz",
    name: "MakeAnOrder",
    component: MakeAnOrder,
  },

  {
    path: "/manufacture/:id",
    name: "Partnes",
    component: Partners,
  },
  {
    path: "/homepage/:id",
    name: "homepage_items",
    component: HomePageItem,
  },
];

export const renderRoutes = (routeProps = {}) => {
  return routes.map((route) => {
    return (
      <Route
        key={`route-${route.name}`}
        path={route.path}
        exact={true}
        render={(props) => {
          if (route.component) {
            return (
              <route.component
                {...routeProps}
                {...props}
                routes={route.routes}
              />
            );
          }

          return null;
        }}
      />
    );
  });
};

export const useRoutes = () => useMemo(() => renderRoutes(), []);
