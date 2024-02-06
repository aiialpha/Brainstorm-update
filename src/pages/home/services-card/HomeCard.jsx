import React from 'react'
import './card.css'

export default function HomeCard(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 service-card">
    <div className="main-card">
    <div className="main-card-icon">
      <img src={props.img} alt="" />
    </div>
    <div className="service-info">
      <h4>{props.heading}</h4>
      <p className='card-description'>
       {props.describtion} 
      </p>
    </div>
    </div>
  </div>
  )
}
