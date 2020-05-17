import React, { useState, useEffect } from "react";
import axios from "axios";
import Cloud from "../components/Cloud";
import { Link } from "react-router-dom";
import "./MainPagecss.css";
function MainPage() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/tours").then((res) => {
      const tour = res.data;
      const tourData = tour.map((item) => {
        return (
          <div className="column" key={item.tour_id}>
            <div className="card">
              <h3>
                {item.tour_name}, {item.location}
              </h3>
              <h4>{item.date}</h4>
              {/* {console.log(item.merch_limit)} */}
              {item.tours_limit === 0 ? <p>sold out</p> : null}
              {(item.tours_limit > 0) & (item.tours_limit <= 20) ? (
                <p>Selling out fast</p>
              ) : null}
              {item.tours_limit > 20 ? <p>Available</p> : null}
            </div>
          </div>
        );
      });
      setTours(tourData);
    });
  }, []);

  return (
    <div className="mainPageContainer">
      <div className="mainPageContainer-first">
        <div className="app-text">
          <Cloud />
          <h1>
            HEY!! Hope you have a great time looking through every detail of the
            website!
          </h1>
          <span className="scroll-btn">
            <a href="/#albums">
              <span className="mouse">
                <span></span>
              </span>
            </a>
            <p>SCROLL DOWN</p>
          </span>
        </div>
      </div>
      <div className="Albums">
        <h1>
          <a id="albums">Latest Release</a>
        </h1>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="https://images.genius.com/109e5e1425790e8f1b776fea8a074a4d.1000x1000x1.jpg"
              className="gallery__img"
              alt="1"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="https://images.genius.com/f3f77222e1b615e0a10354ea6282ff22.1000x1000x1.png"
              className="gallery__img"
              alt="2"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="https://images.genius.com/4804ef2cdfcdb8cc79c9a68f8ce18422.500x500x1.jpg"
              className="gallery__img"
              alt="3"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="https://images.genius.com/960edcb36156c3aed9cb70ede250780a.1000x1000x1.jpg"
              className="gallery__img"
              alt="4"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="https://images.genius.com/7cbd390528fb885a072f16226a7c0982.1000x1000x1.png"
              className="gallery__img"
              alt="5"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="https://images.genius.com/2c1f31ee6278b9ccf7be5b6a3ab190ab.1000x1000x1.jpg"
              className="gallery__img"
              alt=" 6"
            />
          </figure>
        </div>
        <Link to="/webPlayer" style={{ textDecoration: "none" }}>
          <button className="Albumbutton">LISTEN NOW</button>
        </Link>
      </div>
      <div className="MainTours">
        <h1>TICKETS</h1>

        <div className="row">{tours.slice(0, 4)}</div>
        <div className="row">{tours.slice(4, 8)}</div>
        <div className="row">{tours.slice(8, 12)}</div>
        <div className="row">{tours.slice(12, 16)}</div>
        <Link to="/passes" style={{ textDecoration: "none" }}>
          <button className="Ticketsbutton">BUY NOW</button>
        </Link>
      </div>
      <div className="Merch">
        <h1>MERCH</h1>
        <p>Why not we have you redirected there directly?</p>
        <Link to="/merch" style={{ textDecoration: "none" }}>
          <button className="Merchbutton">MERCH</button>
        </Link>
      </div>
      <div className="mainPagefooter">
        <ul>
          <li>
            <a className="foot" href="/">
              Copyright HHH Records
            </a>
          </li>
          <li>
            <a className="foot" href="/">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="foot" href="/">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a className="foot" href="/">
              Do not sell my personal information
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
