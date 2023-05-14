import React from "react";
import "./LoadingScreen.component.css";

const LoadingScreen: React.FC<any> = () => {
  return (
    <div className="loading-screen">
      <div className="loading-screen-wrapper">
        <p>"bichess lie, compilers don't!"</p>
      </div>
      <div className="loading-screen-image-wrapper">
        <img
          className="loading-screen-bg-image"
          src="/public/assets/bgimage.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
