import React from "react";
import backgroundVideo from "../assets/background.mp4"; 
import "../styles/background.css"; 

const Background: React.FC<{ page: string }> = ({ page }) => {
  const backgroundClass = `background ${page}`;

  return (
    <div className={backgroundClass}>
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
