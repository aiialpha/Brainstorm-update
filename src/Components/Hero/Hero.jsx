import "./hero.css";
import React from "react";

export default function Hero({ page }) {
  return (
    <>
     <div className="Hero">
     <div className="overlay">
        <h1 className="hero-heading">{page}</h1>
        
      </div>
     </div>
    </>
  );
}
