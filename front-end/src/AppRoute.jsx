import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import SigninPage from "./pages/SigninPage";
import HomePage from './pages/HomePage';

import { ApplicationProvider, ApplicationContext } from "./contexts/application";
import UploadPage from "./pages/UploadPage";

const AppRoutes = () => {
  const Private = ({children}) => { 
    const { authenticated } = useContext(ApplicationContext);

    if(!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return(
    <Router>
      <ApplicationProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signin" element={<SigninPage />} />
          <Route exact path="/" element={<Private> <HomePage /> </Private>} />
          <Route exact path="/upload" element={<Private> <UploadPage /> </Private>} />
        </Routes>
      </ApplicationProvider>
    </Router>
  );
}

export default AppRoutes;