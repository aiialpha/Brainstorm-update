import React from 'react'
import './hero.css'
import Text from "../text/Text";
import image from "../../../assets/img/bg1.webp";

export default function Hero() {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${image})` }}>
        <div className="box1">

        </div>
        <div className="box">
        </div>
      <div className="overlay-hero">
      <h1>Welcome to the Innovation Hub</h1>
        <p>
          We <Text /> digital solutions
        </p>
      </div>

        {/* <h1>Welcome to the Innovation Hub</h1>
        <p>
          We <Text /> digital solutions
        </p> */}
      </div>
  )
}