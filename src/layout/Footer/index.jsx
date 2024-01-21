import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div>
            <h2>Tasty</h2>
            <Link to="#">
              {" "}
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Link>
          </div>
          <div>
            <h2>Contact Information</h2>
            <Link to="#">
              198 West 21th Street, Suite 721 New York NY 10016
            </Link>
            <Link to="#">+ 1235 2355 98</Link>
            <Link to="#">info@yoursite.com </Link>
            <Link to="#">email@email.com </Link>
          </div>
          <div>
            <h2>Opening Hours</h2>
            <Link to="#">Monday: 08: - 22:00</Link>
            <Link to="#">Tuesday: 08: - 22:00</Link>
            <Link to="#">Wednesday: 08: - 22:00</Link>
            <Link to="#">Thursday: 08: - 22:00</Link>
            <Link to="#">Friday: 08: - 22:00</Link>
            <Link to="#">Saturday: 08: - 22:00</Link>
            <Link to="#">Sunday: 08: - 22:00</Link>
          </div>
          <div>
            <h2>Newsletter</h2>
            <Link to="#">
              Far far away, behind the word mountains, far from the countries.
            </Link>
          </div>
        </div>

        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </p>
      </div>
    </footer>
  );
}

export default Footer;
