import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://fakestoreapi.com/products?limit=6";

const initialState = {
  name: "",
  image: "",
  service: [], // Use lowercase to match the reducer key
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Jatin Patil",
        image: "/images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "React Developer",
        image: "/images/about1.svg",
      },
    });
  };
  
  const getService = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch({ type: "GET_SERVICE", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getService(API);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, updateHomePage, updateAboutPage, getService }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext,  };
