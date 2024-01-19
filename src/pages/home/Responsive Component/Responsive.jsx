import React, { useState, useEffect } from "react";
import Trends from "./tabs/Trends";
import Soft from "./software/Soft";

export default function Responsive() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="responsive-component">
      {windowWidth <= 1500 && windowWidth >= 992 && (
        <Trends />
      )}
      {windowWidth < 992 && (
        <Soft />
      )}
    </div>
  );
};

