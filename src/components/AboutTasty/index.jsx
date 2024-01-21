import React from "react";
import "./index.scss";
function AboutTasty() {
  return (
    <section id="about">
      <div className="container">
        <div className="img">
          <img
            src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp"
            alt=""
          />
        </div>
        <div className="content">
          <div className="title">
            <h4>ABOUT TASTY</h4>
            <h1>Our chef cooks the most <br /> delicious food for you</h1>
          </div>
          <div className="text">
            <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p> A small river named Duden flows by their
          place and supplies it with the necessary regelialia. It is a
          paradisematic country, in which roasted parts of sentences fly into
          your mouth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTasty;
