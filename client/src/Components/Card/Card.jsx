import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled Container
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

// Styled Card Component
const Card = styled.div`
  width: 250px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

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

// Main Component
const HomeAutomationPanel = (props) => {
  const { datas } = props;
  const [roomlightOn, setRoomLightOn] = useState(false);
  const [kitchenLightOn, setKitchenLightOn] = useState(false);
  const [hallLightOn, setHallLightOn] = useState(false);

  useEffect(() => {
    setRoomLightOn(datas.room);
    setKitchenLightOn(datas.kitchen);
    setHallLightOn(datas.hall);
  }, [datas]);

  const handleRoomLightToggle = () => {
    setRoomLightOn(!roomlightOn);
    const roomData = {
      key: "room",
      value: !roomlightOn,
    };
    props.addRoomLightHandler(roomData);
  };

  const handleKitchenLightToggle = () => {
    setKitchenLightOn(!kitchenLightOn);
    const roomData = {
      key: "kitchen",
      value: !kitchenLightOn,
    };
    props.addRoomLightHandler(roomData);
  };

  const handleHallLightToggle = () => {
    setHallLightOn(!hallLightOn);
    const roomData = {
      key: "hall",
      value: !hallLightOn,
    };
    props.addRoomLightHandler(roomData);
  };

  return (
    <Container>
      <Card>
        <Title>Room Light</Title>
        <SwitchContainer>
          <Switch
            type="checkbox"
            checked={roomlightOn}
            onChange={handleRoomLightToggle}
          />
          <SwitchLabel>{roomlightOn ? "ON" : "OFF"}</SwitchLabel>
        </SwitchContainer>
      </Card>
      <Card>
        <Title>Kitchen Light</Title>
        <SwitchContainer>
          <Switch
            type="checkbox"
            checked={kitchenLightOn}
            onChange={handleKitchenLightToggle}
          />
          <SwitchLabel>{kitchenLightOn ? "ON" : "OFF"}</SwitchLabel>
        </SwitchContainer>
      </Card>
      <Card>
        <Title>Hall Light</Title>
        <SwitchContainer>
          <Switch
            type="checkbox"
            checked={hallLightOn}
            onChange={handleHallLightToggle}
          />
          <SwitchLabel>{hallLightOn ? "ON" : "OFF"}</SwitchLabel>
        </SwitchContainer>
      </Card>
    </Container>
  );
};
export default HomeAutomationPanel;
