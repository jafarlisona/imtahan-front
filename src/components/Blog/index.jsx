import React from "react";
import "./index.scss";
function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="title">
          <h4>BLOG</h4>
          <h1>Recent Blog</h1>
        </div>
        <div className="blogs">
          <div className="blogCard">
            <div className="img">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg.webp"
                alt=""
              />
            </div>
            <div className="content">
              <h3>
                Even the all-powerful Pointing has no control about the blind
                text
              </h3>
            </div>
          </div>
          <div className="blogCard">
            <div className="img">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg.webp"
                alt=""
              />
            </div>
            <div className="content">
              <h3>
                Even the all-powerful Pointing has no control about the blind
                text
              </h3>
            </div>
          </div>
          <div className="blogCard">
            <div className="img">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg.webp"
                alt=""
              />
            </div>
            <div className="content">
              <h3>
                Even the all-powerful Pointing has no control about the blind
                text
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
