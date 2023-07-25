/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useRef, useEffect, useState } from "react";
import "./Navigation.component.css";
import Navbar from "../../common/Navbar/Navbar";
import navItems from "../../data/navbarItems";
import { useDispatch, useSelector } from "react-redux";
import {
  updateNavScreenState,
  updateScreenZoomState,
} from "../../store/AppSlice";
import { RootState } from "../../store/store";
import colorPallete from "../../data/colorPallete";
import { Navigate } from "react-router-dom"; 
import ReduxActions from "../../actions/reduxActions";
import ReduxStates from "../../actions/reduxStates";

const Navigation: React.FC<any> = ({ isNavScreenOn }) => {
  const navScreenRef: any = useRef();
  const reduxStates = new ReduxStates();
  const [currentNavIndex, setCurrentNavIndex] = useState(0);
  const isAccentColor = useSelector((state: RootState) => {
    return state.appReducer.isAccentColor;
  });
  const [showImage, setShowImage] = useState(false);
  const navImageRef:any = useRef();
  // const accentColor = useSelector((state:RootState)=>{
  // 	return state.appReducer.accentColor;
  // })
  const colorPalleteIndex = reduxStates.colorPalleteIndex;
  const accentColor = colorPallete[colorPalleteIndex].colorHex;
  const dispatch = useDispatch();
  const color = accentColor;

  const navItemsRef: any = useRef();
  const reduxActions = new ReduxActions();

  const [clickedOutside, setClickedOutside] = useState(false);
  const handleClickOutside = (e: any) => {
    if (!navItemsRef.current.contains(e.target)) {
      navScreenRef.current.style.opacity = 0;
      reduxActions.dismissNavigationScreen();
      setClickedOutside(true);
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  const setImageVisible = (ifShowImage:boolean) =>{
    if(ifShowImage){
    setShowImage(true);
    setTimeout(()=>{
      navImageRef.current.style.opacity = 1;
    },1);
    }else{
      if(navImageRef){
      navImageRef.current.style.opacity = 0;
      setTimeout(()=>{
        setShowImage(false);
      },600)
     }
    }
  }
  useEffect(() => {
    if (isNavScreenOn) {
      setTimeout(() => {
        navScreenRef.current.style.opacity = 1;
      }, 1);
    }
  }, [isNavScreenOn]);
  useEffect(() => {
    if (!isAccentColor) {
      navScreenRef.current.style.background = "";
    } else {
      navScreenRef.current.style.background = `linear-gradient(90deg, ${color}1B 0%, ${color}B0 30%, ${color}EA 55%, ${color}FF 100%)`;
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={navScreenRef} className="navigation-screen">
      <div className="nav-image-wrapper">
       {<img ref={navImageRef} src={`/assets/${navItems[currentNavIndex].navImage}.png`} alt="" />}
       </div>
      <div
        className="nav-screen-wrapper">
        <h3 onClick={()=>{
          reduxActions.changeRoute('/');
        }}>De</h3>
        <div
          className="nav-items"
          ref={navItemsRef}
          onMouseEnter={()=>{
            setImageVisible(true);
          }}
          onMouseLeave={()=>{
            setImageVisible(false);
          }}
          onClick={handleClickInside}
        >
          <Navbar navItems={navItems} onItemHover={(e:number)=>{
            console.log(showImage,"Navbar")
            setCurrentNavIndex(e)
          }}/>
        </div>
        <section className="bottom-links">
           <p>Marketplace.</p>
           <p>Read.</p>
        </section>
      </div>
    </div>
  );
};

export default Navigation;
