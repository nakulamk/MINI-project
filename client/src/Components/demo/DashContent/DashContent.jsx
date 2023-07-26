import React, { useState } from "react";
import "../DemoStyles/DemoStyles.css";
import styled from "styled-components";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const SwitchLabel = styled.label`
  font-size: 14px;
  margin-left: 10px;
  color: #666666;
`;
const Switch = styled.input`
  position: relative;
  width: 40px;
  height: 20px;
  appearance: none;
  background-color: #dcdcdc;
  border-radius: 10px;
  outline: none;
  transition: background-color 0.3s;
  cursor: pointer;

  &:checked {
    background-color: #5cdb95;
  }

  &:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background-color: #ffffff;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: ${({ checked }) =>
      checked ? "translateX(20px)" : "translateX(0)"};
  }
`;

const DashContent = () => {
  const [lightOn, setLightOn] = useState(false);
  const handleLightToggle = () => {
    setLightOn(!lightOn);
  };
  return (
    <section className="dashboard">
      <div className="top">
        <div className="search-box">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>
        <h1>user@gmail.com</h1>
        {/* <img  alt="" /> */}
      </div>
      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <i class="fa-solid fa-bed"></i>
            <span className="text">Rooms</span>
          </div>
          <div className="boxes">
            <div className="box box1">
              <i class="fa-solid fa-lightbulb fa-beat"></i>
              {/* <i class="fa-solid fa-lightbulb"></i> */}
              <span className="text">Light</span>
              <span className="number">50,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={lightOn}
                  onChange={handleLightToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold" }}>
                  {lightOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
            <div className="box box2">
              <i class="fa-solid fa-fan fa-spin"></i>
              {/* <i class="fa-solid fa-fan"></i> */}
              <span className="text">Fan</span>
              <span className="number">20,120</span>
            </div>
            <div className="box box3">
              <i class="fa-solid fa-wifi fa-beat"></i>
              {/* <i class="fa-solid fa-wifi"></i> */}
              <span className="text">Wi-Fi</span>
              <span className="number">10,120</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <i class="fa-solid fa-kitchen-set"></i>
            <span className="text">Kitchen</span>
          </div>
          <div className="boxes">
            <div className="box box1">
              <i class="fa-solid fa-lightbulb fa-beat"></i>
              {/* <i class="fa-solid fa-lightbulb"></i> */}
              <span className="text">Light</span>
              <span className="number">50,120</span>
            </div>
            <div className="box box2">
              <i class="fa-solid fa-microchip fa-beat"></i>
              {/* <i class="fa-solid fa-microchip"></i> */}
              <span className="text">Microwave</span>
              <span className="number">20,120</span>
            </div>
            <div className="box box3">
              <i class="fa-solid fa-mask-ventilator fa-beat"></i>
              {/* <i class="fa-solid fa-mask-ventilator"></i> */}
              <span className="text">Ventilators</span>
              <span className="number">10,120</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <i class="fa-solid fa-restroom"></i>
            <span className="text">Bathrooms</span>
          </div>
          <div className="boxes">
            <div className="box box1">
              <i class="fa-solid fa-lightbulb fa-beat"></i>
              {/* <i class="fa-solid fa-lightbulb"></i> */}
              <span className="text">Light</span>
              <span className="number">50,120</span>
            </div>
            <div className="box box2">
              <i class="fa-solid fa-temperature-arrow-up fa-beat"></i>
              {/* <i class="fa-solid fa-temperature-arrow-up"></i> */}
              <span className="text">Geazer</span>
              <span className="number">20,120</span>
            </div>
            <div className="box box3">
              <i class="fa-solid fa-sun fa-beat"></i>
              {/* <i class="fa-solid fa-sun"></i> */}
              <span className="text">Solar</span>
              <span className="number">10,120</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <i class="fa-solid fa-house "></i>
            {/* <i class="fa-solid fa-house"></i> */}
            <span className="text">Home</span>
          </div>
          <div className="boxes">
            <div className="box box1">
              <i class="fa-solid fa-lightbulb fa-beat"></i>
              {/* <i class="fa-solid fa-lightbulb"></i> */}
              <span className="text">Main-Light</span>
              <span className="number">50,120</span>
            </div>
            <div className="box box2">
              <i class="fa-solid fa-tv fa-beat"></i>
              {/* <i class="fa-solid fa-tv"></i> */}
              <span className="text">TV</span>
              <span className="number">20,120</span>
            </div>
            <div className="box box3">
              <i class="fa-solid fa-fan fa-spin"></i>
              {/* <i class="fa-solid fa-fan"></i> */}
              <span className="text">Wi-Fi</span>
              <span className="number">10,120</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashContent;
