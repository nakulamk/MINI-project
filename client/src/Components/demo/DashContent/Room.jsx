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
const Room = (props) => {
  const { datas } = props;
  const [roomlightOn, setRoomLightOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);
  const [wifiOn, setWifiOn] = useState(false);
  useEffect(() => {
    setRoomLightOn(datas.room);
  }, [datas]);

  const handleRoomLightToggle = () => {
    setRoomLightOn(!roomlightOn);
    const roomData = {
      key: "room",
      value: !roomlightOn,
    };
    props.addRoomLightHandler(roomData);
  };
  const handleRoomFanToggle = () => {
    setFanOn(!fanOn);
  };
  const handleRoomWifiToggle = () => {
    setWifiOn(!wifiOn);
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
            <i class="fa-solid fa-bed"></i>
            <span className="text">Rooms</span>
          </div>
          <div className="boxes">
            <div className="box box1">
              <div>
                {roomlightOn ? (
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
                  checked={roomlightOn}
                  onChange={handleRoomLightToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {roomlightOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
            <div className="box box2">
              <div>
                {fanOn ? (
                  <i class="fa-solid fa-fan fa-spin"></i>
                ) : (
                  <i class="fa-solid fa-fan"></i>
                )}
              </div>

              <span className="text">Fan</span>
              <span className="number">20,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={fanOn}
                  onChange={handleRoomFanToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {fanOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
            <div className="box box3">
              <div>
                {wifiOn ? (
                  <i class="fa-solid fa-wifi fa-beat"></i>
                ) : (
                  <i class="fa-solid fa-wifi"></i>
                )}
              </div>

              <span className="text">Wi-Fi</span>
              <span className="number">10,120</span>
              <SwitchContainer>
                <Switch
                  type="checkbox"
                  checked={wifiOn}
                  onChange={handleRoomWifiToggle}
                />
                <SwitchLabel style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {wifiOn ? "ON" : "OFF"}
                </SwitchLabel>
              </SwitchContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
