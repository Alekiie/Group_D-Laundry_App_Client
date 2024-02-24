import React from "react";
import { MainImage } from "../../assets/images";
import "./Home.css";
import AutoTyping from "../../components/Autotyping";

const Home = () => {
  const autoText =
    "We ensure that your laundry is clean and dry within 12 hours";
  return (
    <>
      <div className="header">
        <div>
          <h2>
            {" "}
            <i className="fa fa-cog" />
            WashClean Laundry
          </h2>
        </div>
        <ul>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="hero">
        <div className="container first-bg">
          <div className="hero-desc">
            <h1>
              <AutoTyping text={autoText} delay={100} />
            </h1>
            <p>
              <b>Bring</b> it to us and then <b>relax</b>
            </p>
            <a href="#">Start here</a>
          </div>
          <img src={MainImage} alt="Main Image" />
        </div>
      </div>
      <div className="how-it-works">
        <div className="container">
          <h1>How it works</h1>
          <p>Our process consists of 3 steps</p>
          <div className="row">
            <div className="card">
              <i className="fa-regular fa-square-check"></i>
              <h1>Get a price</h1>
              <p>
                Tell us about you, how you like your clothes and your dry
                cleaning needs
              </p>
            </div>
            <div className="card">
              <i className="fa-solid fa-bag-shopping"></i>
              <h1>Book a pickup</h1>
              <p>
                Tell us about you, how you like your clothes and your dry
                cleaning needs
              </p>
            </div>
            <div className="card">
              <i className="fa-solid fa-bed"></i>
              <h1>Breath and relax</h1>
              <p>
                Tell us about you, how you like your clothes and your dry
                cleaning needs
              </p>
            </div>
          </div>
          <a href="#">Give a Price estimate</a>
        </div>
      </div>
      <div className="why main-spacing">
        <div className="container">
          <h1>Why WashClean Laundary</h1>
          <p>The safest way to shine on your way out</p>
          <div className="row-spacing">
            <div className="row">
              <div className="card">
                <i className="fa-regular fa-square-check"></i>
                <h1>Get a price</h1>
                <p>
                  Tell us about you, how you like your clothes and your dry
                  cleaning needs
                </p>
              </div>
              <div className="card">
                <i className="fa-solid fa-bag-shopping"></i>
                <h1>Book a pickup</h1>
                <p>
                  Tell us about you, how you like your clothes and your dry
                  cleaning needs
                </p>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <i className="fa-regular fa-square-check"></i>
                <h1>Get a price</h1>
                <p>
                  Tell us about you, how you like your clothes and your dry
                  cleaning needs
                </p>
              </div>
              <div className="card">
                <i className="fa-solid fa-bag-shopping"></i>
                <h1>Book a pickup</h1>
                <p>
                  Tell us about you, how you like your clothes and your dry
                  cleaning needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <h1>contact us Today</h1>
        </div>
      </div>

      <footer className="main-spacing">
        <p>All the credit goes to Group D</p>
      </footer>
    </>
  );
};

export default Home;
