import React, {createContext, useState } from "react";

import { useNavigate } from "react-router-dom";

export const ApplicationContext = createContext();

export const ApplicationProvider  = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [aerodromesList, setAerodromesList] = useState(null);

  const login = (user, password) => {
    console.log("login auth", { user, password });
    setUser({ id:'123', user });
    navigate("/");
  };

  const logout = () => {
    console.log("logout");
    //console.log(aerodromesList);
    setUser(null);
    setAerodromesList(null);
    navigate("/login");
  };

  const aerodromesInput = (aerodromes) => {
    //console.log("aerodrome");
    //console.log(aerodromes)
    setAerodromesList(aerodromes);
  }

  return (
    <ApplicationContext.Provider 
      value={{ authenticated: !!user, user, login, logout, aerodromesInput, aerodromesList }} 
    >
      { children }
    </ApplicationContext.Provider>
  );
}