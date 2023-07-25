import React, { useState, useEffect, useCallback } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import HomeAutomationPanel from "./Components/Card/Card";
import Demo from "./Components/demo/demo";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Card from "./Components/Card/Card";
import DemoSideBar from "./Components/demo/DemoSideBar/DemoSideBar";
import Hall from "./Components/demo/DashContent/Hall";
import Kitchen from "./Components/demo/DashContent/Kitchen";
import Room from "./Components/demo/DashContent/Room";
import BathRoom from "./Components/demo/DashContent/BathRoom";
import Dashboard from "./Components/Pages/Dashboard";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setData] = useState({});

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:3000/home1");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // console.log(response);
      const jsonData = await response.json();
      setData(jsonData);
      console.log({ jsonData });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, []);

  async function addRoomLightHandler(roomData) {
    const response = await fetch("http://127.0.0.1:3000/home1", {
      method: "POST",
      body: JSON.stringify(roomData),

      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    console.log(roomData);
  }
  console.log({ datas });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Perform logout logic, such as clearing user session, etc.
    setIsLoggedIn(false);
  };
  return (
    <>
      {/* <Router>
        <DemoSideBar />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Hall datas={datas} addRoomLightHandler={addRoomLightHandler} />
            }
          />
          <Route
            path="/kitchen"
            element={
              <Kitchen
                datas={datas}
                addRoomLightHandler={addRoomLightHandler}
              />
            }
          />
          <Route
            path="/room"
            element={
              <Room datas={datas} addRoomLightHandler={addRoomLightHandler} />
            }
          />
          <Route path="/bathroom" element={<BathRoom />} />
        </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="/dashboard"
              element={
                <Hall datas={datas} addRoomLightHandler={addRoomLightHandler} />
              }
            />
            <Route
              path="/dashboard/kitchen"
              element={
                <Kitchen
                  datas={datas}
                  addRoomLightHandler={addRoomLightHandler}
                />
              }
            />
            <Route path="/dashboard/bathroom" element={<BathRoom />} />
            <Route
              path="/dashboard/room"
              element={
                <Room datas={datas} addRoomLightHandler={addRoomLightHandler} />
              }
            />
          </Route>
        </Routes>
        {/* <Dashboard /> */}
      </Router>
      {/* <Demo /> */}
      {/* <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router> */}
    </>
  );
};

export default App;

// {/* <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         {/* <Route Path="/dashboard" element={<Demo />} /> */}
//       // </Routes>
// {/* <h1>Data:</h1>
// <pre>{JSON.stringify(datas, null, 2)}</pre>
// {/* <DashBoard />
// <HomeAutomationPanel /> */}
// {/* <Demo /> */}
// {/* <Card datas={datas} addRoomLightHandler={addRoomLightHandler} /> */} */}
