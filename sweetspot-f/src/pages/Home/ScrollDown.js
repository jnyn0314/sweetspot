import React, { useState, useEffect } from "react";
import "./ScrollDown.css";

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    setIsVisible(false); // 스크롤 후 숨김
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return isVisible ? (
    <div className="scroll-down" onClick={handleScroll}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/271/271210.png"
        alt="Scroll Down"
        width="50"
        height="50"
      />
    </div>
  ) : null;
};

export default ScrollDown;
