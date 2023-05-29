import React from "react";
import '../App.css';

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <h1>Awesome Blog</h1>
          <div className="all-icons-nav">
            <div className="nav-search">
              <input type="text" className="nav-input" />
              <button className="icon-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="nav-btns">
              <button className="icon-btn">
                <i class="fa-solid fa-rss"></i>
              </button>
              <button className="icon-btn">
                <i class="fa-brands fa-youtube"></i>
              </button>
              <button className="icon-btn">
                <i class="fa-brands fa-facebook-f"></i>
              </button>
              <button className="icon-btn">
                <i class="fa-brands fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
