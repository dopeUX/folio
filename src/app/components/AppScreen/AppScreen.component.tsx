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
} from "../../store/AppSlice";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";

const AppScreen: React.FC<any> = () => {
  const isNavScreenOn = useSelector((state: RootState) => {
    return state.appReducer.showNavScreen;
  });
  const isLoading = useSelector((state: RootState) => {
    return state.appReducer.isLoading;
  });
  const isLoadingMusic = useSelector((state:RootState) => {
    return state.appReducer.isLoadingMusic;
  })
  const [isAppInitiallyRendered, setIsAppInitiallyRendered] = useState(true);
  const dispatch = useDispatch();
  const audioRef:any = useRef();
  
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
  
  useEffect(()=>{
    if(isAppInitiallyRendered){
      dispatch(updateIsLoading(true));
      dispatch(updateIsLoadingScreenTurnedOn(true));
      setTimeout(()=>{
        setIsAppInitiallyRendered(false);
      },1000)
    }
  },[]);


  return (
    <div className="AppScreen">
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
      {/* /////////////? */}
      {/* <audio style={{display:'none'}} id="backgroundMusic" ref={audioRef} autoPlay={true} src="/public/assets/paranoid.mp3" controls muted={false}></audio> */}
      {isNavScreenOn && <Navigation isNavScreenOn={isNavScreenOn} />}
      {
        !isAppInitiallyRendered && <Screen/>
      }
    </div>
  );
};

export default AppScreen;
