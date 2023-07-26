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

const Hall = (props) => {
  const { datas } = props;
  const [hallLightOn, setHallLightOn] = useState(false);
  const [tvOn, setTvOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setHallLightOn(datas.hall);
  }, [datas]);
  const handleHallLightToggle = () => {
    setHallLightOn(!hallLightOn);
    const roomData = {
      key: "hall",
      value: !hallLightOn,
    };
    props.addRoomLightHandler(roomData);
  };
  const handleHallTvToggle = () => {
    setTvOn(!tvOn);
  };
  const handleHallAcToggle = () => {
    setAcOn(!acOn);
  };
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
        <i class="uil uil-bars sidebar-toggle"></i>
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
            <i class="fa-solid fa-house "></i>
            {/* <i class="fa-solid fa-house"></i> */}
            <span className="text">Hall</span>
          </div>
          <div className="boxes">
            <div className="box box1">
              <div>
                {hallLightOn ? (
                  <i class="fa-solid fa-lightbulb fa-beat"></i>
                ) : (
                  <i class="fa-solid fa-lightbulb"></i>
                )}
              </div>
              <span className="text">Main-Light</span>
              <span className="number">50,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={hallLightOn}
                  onChange={handleHallLightToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {hallLightOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
            <div className="box box2">
              <div>
                {tvOn ? (
                  <i class="fa-solid fa-tv fa-beat"></i>
                ) : (
                  <i class="fa-solid fa-tv"></i>
                )}
              </div>

              <span className="text">TV</span>
              <span className="number">20,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={tvOn}
                  onChange={handleHallTvToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {tvOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
            <div className="box box3">
              <div>
                {acOn ? (
                  <i class="fa-solid fa-fan fa-spin"></i>
                ) : (
                  <i class="fa-solid fa-fan"></i>
                )}
              </div>
              <span className="text">Air-Cooler</span>
              <span className="number">10,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={acOn}
                  onChange={handleHallAcToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {acOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hall;
