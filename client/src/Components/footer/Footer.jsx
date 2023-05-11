import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contents footer-about">
        <h1 className="footer-heading">About</h1>
        <hr />
        <p className="about-content">-First fully furnished gym in Bokaro</p>
        <p className="about-content">-Fully air conditioned</p>
        <p className="about-content">-Sanitized restroom</p>
        <p className="about-content">-New Hi-Tech Machines</p>
        <p className="about-content">-Personal Trainer</p>
        <p className="about-content">-Affordable price</p>
        <p className="about-content">-Supervised Diet Plan</p>
        <button className="btn">
          Buy Now <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
      <div className="footer-classes footer-contents">
        <h1 className="footer-heading">Classes</h1>
        <hr />
        <div className="classes-container">
          <a className="footer-text footer-link" href="asd">
            FITNESS CLASSES →
          </a>
          <a className="footer-text footer-link" href="asd">
            YOGA CLASSES →
          </a>
          <a className="footer-text footer-link" href="asd">
            DANCE CLASSES →
          </a>
        </div>
      </div>
      <div className="footer-contents footer-contact">
        <h1 className="footer-heading">Contact</h1>
        <hr />
        <div className="ul">
          <li className="footer-contact-li">
            Week days @ 05:00-22:00 || Saturday: 08:00 – 18:00 || Sunday: Closed
          </li>
          <li className="footer-contact"> Mobile: 8335956466, 8797626299</li>
          <li className="footer-contact">
            CITY CENTRE,Sector-4,PLOT NO.F-3,Bokaro Steel City
          </li>
          <li className="footer-contact">E-mail: gymnationbokaro@gmail.com</li>
          <li className="footer-contact map-btn">
            <a
              href="https://www.google.com/maps/dir/23.6724977,86.146599/gymnation/@23.6702798,86.1433313,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39f423c294f4312f:0xf55eb38edaac1899!2m2!1d86.14456!2d23.6683218"
              className="footer-link"
            >
              Get directions on map →
            </a>
          </li>
        </div>
      </div>
      <div className="footer-contents footer-social">
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-github"></i>
        <i className=" top-icon fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}
