import React from "react";
import "../Styles/styles.css";
import { Link } from "react-router-dom";

import HeroBanner from "../../assets/images/hero-banner.png";
const Hero = () => {
  return (
    <div>
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">Smart Home Smart Services.</h1>

            <p className="hero-text">
              A creative & modern landing page with Landio template & We love
              make things amazingg.
            </p>

            {/* <p className="form-text">
              <span>🥳</span> Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur that is fugit.
            </p> */}
            <div className="btn-group">
              {/* <button className="btn btn-primary">Read More</button> */}
              <button className="btn btn-secondary">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn btn-tertiary">
                <Link to="/register">Register</Link>
              </button>
            </div>

            <form action="" className="hero-form">
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                className="email-field"
              />

              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>

          <figure className="hero-banner">
            <img src={HeroBanner} alt="Hero Banner" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Hero;
