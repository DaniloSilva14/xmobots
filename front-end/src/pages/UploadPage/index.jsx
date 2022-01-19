import React from "react";

import SideBar from "../../components/SideBar";
import Upload from "../../components/Upload";

import "./styles.css";

const UploadPage = () => {
  return (
    <div className="container">
      <SideBar />
      <Upload />
    </div>
  );
}

export default UploadPage