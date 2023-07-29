import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Features from "../Features/Features";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
