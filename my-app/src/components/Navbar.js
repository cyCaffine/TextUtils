import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      class={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}
    >
      <a class="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {/* <li class="nav-item active">
            <a class="nav-link" href="/home">
              Home{" "}
            </a>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link" href="/about">
              {props.about}
            </a>
          </li> */}
        </ul>
      </div>

      <div class="form-check form-switch text-light">
        <input
          className="form-check-input"
          onClick={props.toggleMode}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable dark mode
        </label>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
