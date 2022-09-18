import { Route } from "react-router-dom";
import { useMemo } from "react";
import {
  About,
  Categories,
  Contacts,
  Delivery,
  Home,
  New,
  Partners,
  Paying
} from "../pages";
import Basket from '../pages/Basket/Basket'

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

  //   optional
  {
    path: "/categories",
    name: "categories",
    component: Categories,
  },

  {
    path: "/novniki",
    name: "novinki",
    component: New,
  },

  {
    path: "/partners",
    name: "partners",
    component: Partners,
  },

  {
    path: "/dostavka",
    name: "dostavka",
    component: Delivery,
  },

  {
    path: "/oplata",
    name: "oplata",
    component: Paying,
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
  }
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
