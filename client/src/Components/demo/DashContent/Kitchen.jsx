import React from "react";
import { useState, useEffect } from "react";
import "../DemoStyles/DemoStyles.css";
import styled from "styled-components";
import axios from "axios";

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
const Kitchen = (props) => {
  const { datas } = props;
  const [kitchenLightOn, setKitchenLightOn] = useState(false);
  const [microOn, setMicroOn] = useState(false);
  const [ventilatorOn, setVentilatorOn] = useState(false);
  console.log("kitchen");
  useEffect(() => {
    setKitchenLightOn(datas.kitchen);
  }, [datas]);

  const handleKitchenLightToggle = () => {
    setKitchenLightOn(!kitchenLightOn);
    const roomData = {
      key: "kitchen",
      value: !kitchenLightOn,
    };
    props.addRoomLightHandler(roomData);
  };
  const handleKitchenMicroToggle = () => {
    setMicroOn(!microOn);
  };
  const handleKitchenVentilatorToggle = () => {
    setVentilatorOn(!ventilatorOn);
  };
  const [userName, setUserName] = useState("");
  const getUserName = async () => {
    const userId = window.localStorage.getItem("userID");

    const response = await axios.get(
      `http://localhost:9000/auth/getUserWithId/${userId}`
    );
    console.log(response);

    // console.log(response.data.user.username);
    setUserName(response.data.user.username);
    // console.log("Hall");
    // console.log(typeof userId);
    // console.log(typeof(64946515afcea7b53bb085ef))
  };
  useEffect(() => {
    getUserName();
  }, []);
  return (
    <section className="dashboard">
      <div className="top">
        <div className="search-box">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>
        <h1>{`Hi ${userName}`}</h1>
        {/* <img  alt="" /> */}
      </div>
      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <i class="fa-solid fa-kitchen-set"></i>
            <span className="text">Kitchen</span>
          </div>
          <div className="boxes">
            <div className="box box1">
              <div>
                {kitchenLightOn ? (
                  <i class="fa-solid fa-lightbulb fa-beat"></i>
                ) : (
                  <i class="fa-solid fa-lightbulb"></i>
                )}
              </div>
              <span className="text">Light</span>
              <span className="number">50,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={kitchenLightOn}
                  onChange={handleKitchenLightToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {kitchenLightOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
            <div className="box box2">
              <div>
                {microOn ? (
                  <i class="fa-solid fa-microchip fa-beat"></i>
                ) : (
                  <i class="fa-solid fa-microchip"></i>
                )}
              </div>
              <span className="text">Microwave</span>
              <span className="number">20,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={microOn}
                  onChange={handleKitchenMicroToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {microOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
            <div className="box box3">
              <div>
                {ventilatorOn ? (
                  <i class="fa-solid fa-mask-ventilator fa-beat"></i>
                ) : (
                  <i class="fa-solid fa-mask-ventilator"></i>
                )}
              </div>

              <span className="text">Ventilators</span>
              <span className="number">10,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={ventilatorOn}
                  onChange={handleKitchenVentilatorToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {ventilatorOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
