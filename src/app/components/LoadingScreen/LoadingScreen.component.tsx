import React from "react";
import "./LoadingScreen.component.css";

const LoadingScreen: React.FC<any> = () => {
  return (
    <div className="loading-screen">
      <div className="loading-screen-wrapper">
        <p>"bitches lie, compilers don't!"</p>
      </div>
      <img src="/public/assets/bgimage.png" alt="" />
    </div>
  );
};

export default LoadingScreen;
