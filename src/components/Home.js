import React from 'react'
import { Link } from 'react-router-dom'

// import './HomeS.css'
const imageS={
  height:'100vh'
  // width:'100vw'
}

const h_pS={
height:'70vh'
}

export default function Home() {
  return (
  <>
  

  <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={imageS} src="https://1.bp.blogspot.com/-JbbvN8Bf43k/Xybbp0ElqJI/AAAAAAAAXp0/BtM1Tadc5ic6WrDQxtOLZcMqQaxQBI38QCLcBGAsYHQ/s1600/Guess%2BThe%2BNumber.jpg" className="d-block w-100" alt="..."/>
      <div style={h_pS}    className="carousel-caption d-none d-md-block">

      <h1 className='fs-1' >Interesring Game to test your guessig ability</h1>

    <Link to="/Area">    <button type="button" class="btn btn-outline-secondary">Start Game</button></Link>
      </div>
    </div>
    <div   className="carousel-item">
      <img style={imageS} src="http://wallpaperset.com/w/full/8/d/e/81432.jpg" className="d-block  w-100" alt="..."/>
      <div style={h_pS} className="carousel-caption d-none d-md-block">
        <h5>Play with friends</h5>
        <Link to="/Area">    <button type="button" class="btn btn-outline-secondary">Start Game</button></Link>
      </div>
    </div>
    <div  className="carousel-item">
      <img style={imageS} src="https://wallpaperaccess.com/full/2977125.jpg" className="d-block w-100" alt="..."/>
      <div style={h_pS} className="carousel-caption d-none d-md-block">
        <h5>Calculate your Score & win the match</h5>
        <Link to="/Area">    <button type="button" class="btn btn-outline-secondary">Start Game</button></Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
  
  
  </>
  )
}

