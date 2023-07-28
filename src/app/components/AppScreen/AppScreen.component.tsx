/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useRef, useState } from "react";
import "./AppScreen.component.css";
import Screen from "../Screen/Screen.component";
import Navigation from "../Navigation/Navigation.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LoadingScreen from "../LoadingScreen/LoadingScreen.component";
import BlurOverlayLoadingScreen from "../BlurOverlayLoadignScreen/BlurOverlayLoadingScreen.component";
import {
  updateIsLoading,
  updateIsLoadingScreenTurnedOn,
  updateNavScreenState,
  updateScreenZoomState,
} from "../../store/AppSlice";
import Hamburger from "../../common/Hamburger/Hamburger";
import ReduxActions from "../../actions/reduxActions";
import ReduxStates from "../../actions/reduxStates";

const AppScreen: React.FC<any> = () => {
  const reduxStates = new ReduxStates();
  const isNavScreenOn = reduxStates.isNavScreenOn;
  const isLoading = reduxStates.isLoading;
  const isLoadingMusic = reduxStates.isLoadingMusic;
  const [isAppInitiallyRendered, setIsAppInitiallyRendered] = useState(true);
  const dispatch = useDispatch();
  const audioRef: any = useRef();
  const demoRef: any = useRef();
  const reduxActions = new ReduxActions();

  // useEffect(()=>{
  //   console.log(isLoading)
  //   if(isLoadingMusic){
  //     audioRef.current.volume = 0.1
  //     audioRef.current.currentTime = 14;
  //     audioRef.current.play();
  //     const intv = setInterval(()=>{
  //       if(audioRef.current.volume<=0.8){
  //        audioRef.current.volume = audioRef.current.volume + 0.1
  //       }
  //     },500)
  //     setTimeout(()=>{
  //       clearInterval(intv);
  //     },4000)
  //   }else{
  //     const intv = setInterval(()=>{
  //       if(audioRef.current.volume>=0.2){
  //         console.log('eee',audioRef.current.volume)
  //         audioRef.current.volume = audioRef.current.volume - 0.1
  //       }
  //     },500)
  //     setTimeout(()=>{
  //       clearInterval(intv);
  //       audioRef.current.pause();
  //     },4000)
  //     // audioRef.current.pause();
  //   }

  // },[isLoadingMusic])

  useEffect(() => {
    demoRef.current.click();
    if (isAppInitiallyRendered) {
      reduxActions.showLoadingScreen();
      // dispatch(updateIsLoading(true));
      // dispatch(updateIsLoadingScreenTurnedOn(true));
      setTimeout(() => {
        setIsAppInitiallyRendered(false);
      }, 1000);
    }
  }, []);

  return (
    <div
      ref={demoRef}
      className="AppScreen"
      onClick={() => {
        console.log("halooo");
      }}
    >
      {/* <Box/> */}
      {/* {isLoading && <BlurOverlayLoadingScreen />} */}
      {isLoading && <LoadingScreen />}
      {/* /////TEST CODE ------- */}
      {/* <button
        onClick={() => {
          dispatch(updateIsLoading(true));
          dispatch(updateIsLoadingScreenTurnedOn(true));
        }}
        >
        click
      </button> */}
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="screen-nav-button">
          <Hamburger
            onMenuClick={() => {
              reduxActions.showNavigationScreen();
            }}
          />
        </div>
      </a>
      {/* /////////////? */}
      {reduxStates.isMusicPlayerVisible && musicApp()}
      {/* <audio style={{display:'none'}} id="backgroundMusic" ref={audioRef} autoPlay={true} src="/public/assets/paranoid.mp3" controls muted={false}></audio> */}
      {isNavScreenOn && <Navigation isNavScreenOn={isNavScreenOn} />}
      {!isAppInitiallyRendered && <Screen />}
    </div>
  );
};

function musicApp() {
  return (
    <div className="music-player">
      <img src="assets/music-icon.svg" alt="" />
      <div className="music-details">
        <h4>Eenie Meenie</h4>
        <p>Justin Bieber, Sean kinsgton</p>
      </div>
      <img className="music-play" src="assets/music-play.svg" alt="" />
    </div>
  );
}

export default AppScreen;
