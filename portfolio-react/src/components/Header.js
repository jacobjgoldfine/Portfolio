import React from "react";

export default function Header() {
  return (
    <div>
      <header className="navbar">
        <div className="d-flex flex-row">
          <h1 className="">Jacob Goldfine</h1>
          <div className="flex-grow-1"></div>
          <nav className="flex-shrink-1 float-right">
            <ul>
              <li>
                <a href="#About_Me">About Me</a>
              </li>
              <li>
                <a href="#first_work">Work</a>
              </li>
              <li>
                <a href="#contact_me">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
