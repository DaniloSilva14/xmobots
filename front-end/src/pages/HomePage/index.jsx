import React from "react";

import SideBar from "../../components/SideBar";
import Maps from "../../components/Maps";

import "./styles.css";

const HomePage = () => {
  return (
    <div className="container">
      <SideBar />
      <Maps />
    </div>
  );
}

export default HomePage