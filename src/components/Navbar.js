import React from 'react'
import {Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-dark  ">
  <div className="container-fluid">
    <Link className="navbar-brand " >Guess_The_Number_Game</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="nav-link active mx-1" aria-current="page" to="/Home">Home</Link>
        {/* <Link className="nav-link active mx-3" aria-current="page" to="/Area">Game</Link> */}
        <Link className="nav-link active mx-1" aria-current="page" to="/About Us">About Us</Link>
        <Link className="nav-link active mx-1" aria-current="page" to="/Name">Name</Link>
        {/* <Link className="nav-link" to="/">Features</a>
        <Link className="nav-link" to="/">Pricing</a> */}
     
      </div>
    </div>
  </div>
</nav>
  )
}
