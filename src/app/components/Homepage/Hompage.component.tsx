/* eslint-disable no-mixed-spaces-and-tabs */
'use client';
import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Homepage.component.css";
import Hamburger from "../../common/Hamburger/Hamburger";
import OutlinedButton from "../../common/OutlinedButton/OutlinedButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import colorPallete from "../../data/colorPallete";
import ReduxActions from "../../actions/reduxActions";
import ReduxStates from "../../actions/reduxStates";
import workData from "../../data/projectsData";

const Homepage: React.FC<any> = () => {
  //   const accentColor = useSelector((state: RootState) => {
  //     return state.appReducer.accentColor;
  //   });
  const colorPalleteIndex = useSelector((state: RootState) => {
    return state.appReducer.colorPalleteIndex;
  });
  const reduxActions = new ReduxActions();
  const reduxStates = new ReduxStates();
  const isLoadingScreenTurnedOn = reduxStates.isLoadingScreenTurnedOn;
  const accentColor = colorPallete[colorPalleteIndex].colorHex;
  const imageRef: any = useRef();
  let count:number = 0;
  const audioRef:any = useRef(null);
  useLayoutEffect(() => {
    imageRef.current.style.filter = colorPallete[colorPalleteIndex].filter;
    // accentColor = colorPallete[colorPalleteIndex].colorHex;
  }, [colorPalleteIndex]);
  
  
  useEffect(()=>{
    if(isLoadingScreenTurnedOn){
      setTimeout(()=>{
        //min 1300 sec
        //  reduxActions.dismissLoadingScreen();
        // loadProjectImages();
      },5000)
      }
  },[reduxStates.isLoadingScreenTurnedOn])
  useEffect(()=>{
    // audioRef.current.play()
  })

  return (
    // <div></div>
    <section className="homepage">
      <h1 className="homepage-head">Bonsoir!</h1>
      <p>
       "As a skilled MERN stack developer, I embark on a journey to bring ideas to life and transform digital landscapes. With a passion for crafting seamless experiences, I specialize in leveraging the power of MongoDB, Express.js, React, and Node.js to build dynamic, scalable, and intuitive web solutions. Armed with expertise in full-stack development, I thrive on pushing boundaries and exceeding client expectations." 
      </p>
     
     <section className="bottom-container">
      <div className="homepage-social-logos">
        <a href="https://www.github.com/dopeUX" target="_blank">
          <img
            ref={imageRef}
            className={`${colorPallete[colorPalleteIndex].name}`}
            src="/assets/github-logo.svg"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/shreyash-fulzele" target="_blank">
          <img
            ref={imageRef}
            className={`${colorPallete[colorPalleteIndex].name}`}
            src="/assets/linkedin-logo.svg"
            alt=""
          />
        </a>
      </div>
      {/* <audio id="backgroundMusic" ref={audioRef} autoPlay={true} src="/public/assets/samplemusic.mp3" controls muted={false}></audio> */}
      {/* <a href="" onClick={(e)=>{
         e.preventDefault();
      }}>
      </a> */}
      <section className="bottom-right-hlinks">
        <a href="">
          <p>Marketplace.</p>
        </a>
        <a href="">
          <p>Read.</p>
        </a> 
        </section>  
        {/* <OutlinedButton
          title="Resume"
          classN="homepage-download-btn"
          color={accentColor}
        >
          <img
            className={`download-btn-icon ${colorPallete[colorPalleteIndex].name}`}
            src="/public/assets/download.svg"
            alt=""
          />
        </OutlinedButton> */}
        {/* <button className="outlined-btn homepage-download-btn">Resume <img className="download-btn-icon" src="/public/assets/download.svg" alt="" /></button> */}
        </section>
    </section>
  );
};

export default Homepage;
