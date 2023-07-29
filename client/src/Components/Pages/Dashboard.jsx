import React from "react";
import { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import Hall from "../demo/DashContent/Hall";
import Room from "../demo/DashContent/Room";
import Kitchen from "../demo/DashContent/Kitchen";
import BathRoom from "../demo/DashContent/BathRoom";
import DemoSideBar from "../demo/DemoSideBar/DemoSideBar";
const Dashboard = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [datas, setData] = useState({});

  // const fetchDataHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch("http://127.0.0.1:3000/home1");
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     // console.log(response);
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //     console.log({ jsonData });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchDataHandler();
  // }, []);

  // async function addRoomLightHandler(roomData) {
  //   const response = await fetch("http://127.0.0.1:3000/home1", {
  //     method: "POST",
  //     body: JSON.stringify(roomData),

  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   console.log(roomData);
  // }
  // console.log({ datas });
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogout = () => {
  //   // Perform logout logic, such as clearing user session, etc.
  //   setIsLoggedIn(false);
  // };
  return (
    <>
      <DemoSideBar />
      {/* <Demo /> */}
      <Outlet />
      {/* <Routes>
        <Route
          path="/"
          element={
            <Hall datas={datas} addRoomLightHandler={addRoomLightHandler} />
          }
        />
        <Route
          path="/kitchen"
          element={
            <Kitchen datas={datas} addRoomLightHandler={addRoomLightHandler} />
          }
        />
        <Route
          path="/room"
          element={
            <Room datas={datas} addRoomLightHandler={addRoomLightHandler} />
          }
        />
        <Route path="/bathroom" element={<BathRoom />} />
        
      </Routes> */}
    </>
  );
};

export default Dashboard;
