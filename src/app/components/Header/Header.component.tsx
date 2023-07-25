/* eslint-disable no-mixed-spaces-and-tabs */
import React, { FC, useEffect, useRef, useLayoutEffect, useState } from "react";
import "./Header.component.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import colorPallete from "../../data/colorPallete";
import { updateColorPalleteIndex } from "../../store/AppSlice";
import ReduxStates from "../../actions/reduxStates";
import ReduxActions from "../../actions/reduxActions";

const Header: React.FC<any> = ({ logoTitle, headerBgOn=true, currentPage = 'work.' }) => {
  const profileImageRef: any = useRef();
  const dispatch = useDispatch();
  // const accentColor = useSelector((state: RootState) => {
  //   return state.appReducer.accentColor;
  // });
  const reduxActions = new ReduxActions();
  const reduxStates = new ReduxStates();
  const titlePageRef:any = useRef();
  const logoRef:any = useRef();
  const headerRef:any = useRef();
  const [isHeaderBg, setIsHeaderBg] = useState(false);
  const colorPalleteIndex = reduxStates.colorPalleteIndex;
  const accentColor = colorPallete[colorPalleteIndex].colorHex;
  useLayoutEffect(() => {
    profileImageRef.current.style.border = `3px solid ${accentColor}`;
  }, [colorPalleteIndex]);

  useEffect(()=>{
    setTimeout(()=>{
      // headerRef.current.style.justifyContent = 'space-between'
      // headerRef.current.style.animation = 'headerAnim .5s forwards ease'; 
    },3000)
  },[])

  useEffect(()=>{
   if(headerBgOn){
    setIsHeaderBg(true);
    setTimeout(() => {
      titlePageRef.current.style.animation = 'slide-in .5s forwards ease'
    }, 10);
   }else{
    if(titlePageRef?.current?.style){
    titlePageRef.current.style.animation = 'slide-out .5s forwards ease'
     setTimeout(() => {
      setIsHeaderBg(false);
     }, 550);
    }
   }
  },[headerBgOn])

  useEffect(()=>{
    if(reduxStates.isMusicPlayerVisible){
      // disable the header for 2000 ms
       logoRef.current.disable = true
      setTimeout(()=>{
        reduxActions.updateIsMusicPlayer(false);
      }, 2000)
    }
   },[reduxStates.isMusicPlayerVisible])

  return (
    <header ref={headerRef} className={`${headerBgOn && 'setHeaderBg'}`}>
      <section className="left-col">
       <h1 ref={logoRef} onClick={()=>{
        reduxActions.updateIsMusicPlayer(true);
       }}>{logoTitle}</h1>
       {
         isHeaderBg && <h4 ref={titlePageRef}>{currentPage}</h4>
       }
      </section>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img
          onClick={() => {
            console.log(colorPalleteIndex);
            reduxActions.updateColorPalleteIndex();
          }}
          ref={profileImageRef}
          className="header-image"
          src="/assets/header-image.jpg"
          alt=""
        />
      </a>
    </header>
  );
};

export default Header;
