import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
  <>
  <div className="container d-flex flex-column text-center justify-content-center align-items-center space" style={{height:"100vh"}}>
<h1 className='m'>Guess The Number</h1>
<h3>Enter into a world of Guessing, wher you need to guess the number what computer chooses</h3>
<Link to='/Area'><button type="button" class="btn btn-outline-secondary m-3 fw-semibold">Start Game</button></Link>
  </div>
  </>
  )
}

