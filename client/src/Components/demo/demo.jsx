import React from "react";
import "./DemoStyles/DemoStyles.css";
import DashContent from "./DashContent/DashContent";
import DemoSideBar from "./DemoSideBar/DemoSideBar";
const Demo = () => {
  return (
    <div id="#body">
      <DemoSideBar />
      <DashContent />
    </div>
  );
};

export default Demo;
