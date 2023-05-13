/* eslint-disable no-mixed-spaces-and-tabs */
import React, { FC, useEffect, useRef, useLayoutEffect } from "react";
import "./Header.component.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import colorPallete from "../../data/colorPallete";
import { updateColorPalleteIndex } from "../../store/AppSlice";

const Header: React.FC<any> = ({ logoTitle }) => {
  const profileImageRef: any = useRef();
  const dispatch = useDispatch();
  // const accentColor = useSelector((state: RootState) => {
  //   return state.appReducer.accentColor;
  // });
  const colorPalleteIndex = useSelector((state: RootState) => {
    return state.appReducer.colorPalleteIndex;
  });
  const accentColor = colorPallete[colorPalleteIndex].colorHex;
  useLayoutEffect(() => {
    profileImageRef.current.style.border = `3px solid ${accentColor}`;
  }, [colorPalleteIndex]);
  return (
    <header>
      <h1>{logoTitle}</h1>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img
          onClick={() => {
            console.log(colorPalleteIndex);
            dispatch(updateColorPalleteIndex());
          }}
          ref={profileImageRef}
          className="header-image"
          src="/public/assets/header-image.jpg"
          alt=""
        />
      </a>
    </header>
  );
};

export default Header;
