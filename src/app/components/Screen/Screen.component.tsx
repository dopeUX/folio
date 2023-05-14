/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useRef } from "react";
import "./Screen.component.css";
import Header from "../Header/Header.component";
import Homepage from "../Homepage/Hompage.component";
import Hamburger from "../../common/Hamburger/Hamburger";
import { useDispatch, useSelector } from "react-redux";
import {
  updateNavScreenState,
  updateScreenZoomState,
} from "../../store/AppSlice";
import { RootState } from "../../store/store";
import { Routes, Route } from "react-router-dom";

const Screen: React.FC<any> = () => {
  const isShowNavScreen = useSelector((state: RootState) => {
    return state.appReducer.showNavScreen;
  });
  const screenZoomState = useSelector((state: RootState) => {
    return state.appReducer.screenZoomState;
  });
  const screenRef: any = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    screenRef.current.style.transform = screenZoomState;
  }, [screenZoomState]);
  return (
    <div ref={screenRef} className="screen light-theme">
      <Header logoTitle="Dé" />
      {/* ///All Routes -------------- */}
      <Homepage />
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="screen-nav-button">
          <Hamburger
            onMenuClick={() => {
              dispatch(updateNavScreenState());
              dispatch(updateScreenZoomState("scale(0.95)"));
            }}
          />
        </div>
      </a>
    </div>
  );
};

export default Screen;
