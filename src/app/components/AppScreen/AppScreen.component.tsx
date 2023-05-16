/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from "react";
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

const AppScreen: React.FC<any> = () => {
  const isNavScreenOn = useSelector((state: RootState) => {
    return state.appReducer.showNavScreen;
  });
  const isLoading = useSelector((state: RootState) => {
    return state.appReducer.isLoading;
  });
  const [isAppInitiallyRendered, setIsAppInitiallyRendered] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(isLoading)
  },[isLoading])
  useEffect(()=>{
    if(isAppInitiallyRendered){
      dispatch(updateIsLoading(true));
      dispatch(updateIsLoadingScreenTurnedOn(true));
      setTimeout(()=>{
        setIsAppInitiallyRendered(false);
      },1000)
    }
  },[])

  return (
    <div className="AppScreen">
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
      
      {isNavScreenOn && <Navigation isNavScreenOn={isNavScreenOn} />}
      {
        !isAppInitiallyRendered && <Screen/>
      }
    </div>
  );
};

export default AppScreen;
