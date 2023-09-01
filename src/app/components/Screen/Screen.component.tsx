/* eslint-disable no-mixed-spaces-and-tabs */
'use client';
import React, { useEffect, useRef, useState } from "react";
import "./Screen.component.css";
import Header from "../Header/Header.component";
import Homepage from "../Homepage/Hompage.component";
import Hamburger from "../../common/Hamburger/Hamburger";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIsLoadingScreenTurnedOn,
  updateNavScreenState,
  updateScreenZoomState,
} from "../../store/AppSlice";
import { RootState } from "../../store/store";
import { Routes, Route } from "react-router-dom";
import WorkPage from "../WorkPage/WorkPage.component";
import Footer from "../Footer/Footer.component";
import AboutPage from "../AboutPage/AboutPage.component";
import ReduxStates from "../../actions/reduxStates";
import ContactPage from "../ContactPage/ContactPage.component";
import navItems from "../../data/navbarItems";
import ReduxActions from "../../actions/reduxActions";
import workData from "../../data/projectsData";

const Screen: React.FC<any> = () => {
  const reduxStates = new ReduxStates();
  const reduxActions = new ReduxActions();
  const isShowNavScreen = reduxStates.isShowNavScreen;
  const screenZoomState = reduxStates.screenZoomState;
  const heroSectionState:any = reduxStates.heroSectionState;
  const heroSectionRef:any = useRef();
  const screenRef: any = useRef();
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderBg, setHeaderBg] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if(position>100){
      setHeaderBg(true);
    }else{
      setHeaderBg(false);
    }
    console.log(position," SCROLL-POSITION");
  };
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  },[])

  useEffect(()=>{
    console.log(reduxStates.isNavScreenOn, 'plllll');
  })

  useEffect(()=>{
    // setTimeout(() => {
    //   // dispatch(updateIsLoadingScreenTurnedOn(false));
    // },2000);
    setTimeout(()=>{
      dispatch(updateScreenZoomState('scale(1)'))
    },2300)
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
     loadProjectImages();    
   }, 2000);
  },[])
  
  const loadNavigationImages = async() => {
    let itr = 0;
    let len = navItems.length;
    navItems.forEach((item:any, i:number)=>{
      const preloadImage = new Image();
        preloadImage.src = `/assets/${item.navImage}`
        preloadImage.onload = () =>{
          if(i === len-1){
            reduxActions.dismissLoadingScreen();
          }else{
            itr = itr++
          }
        }
    })
  }
  const loadProjectImages = async() =>{
    let itr = 0;
    let len = workData.length;
    workData.forEach((item:any, i)=>{
      item?.assets.forEach((y:any, j:number)=>{
        const preloadImage = new Image();
        let len2 = item?.assets.length;
        preloadImage.src = `/assets/projectImages/${y}`;
        preloadImage.onload = () => {
          // Image preloaded
          console.log(itr, 'weeeeeeee')
          if(i === len-1 && len2-1 === j){
            loadNavigationImages();
          }else{
           itr = itr+1;
          }
        };
      })
    });
  }
  useEffect(() => {
    screenRef.current.style.transform = screenZoomState;
    // screenRef.current.style.opacity = 1;
  }, [screenZoomState]);

  useEffect(()=>{
    if(heroSectionState?.screenZoom == 'scale(0.9)'){
      heroSectionRef.current.style.transform = heroSectionState?.screenZoom;
      setTimeout(()=>{
        heroSectionRef.current.style.opacity = 0;
      },300)

      setTimeout(()=>{
        heroSectionRef.current.style.transform = 'scale(1.1)';
      },1000)

      setTimeout(()=>{
        heroSectionRef.current.style.transform = 'scale(1.0)';
        heroSectionRef.current.style.opacity = 1;
      }, 1500)
    }
  },[heroSectionState])
  return (
  //  <div className="screen-wrapper">
    <div ref={screenRef} className="screen" style={{zIndex:12}}>
      <Header logoTitle="Dé" headerBgOn={isHeaderBg}/>
      {/* ///All Routes -------------- */}
      <section ref={heroSectionRef} className="hero-section">
        <Routes>
         <Route path="/" Component={Homepage}/>
         <Route path="/work" Component={WorkPage}/>
         <Route path="/about" Component={AboutPage}/>
         <Route path="/reach" Component={ContactPage}/>
        </Routes>
      </section>
      {/* <Homepage /> */}
      <Footer/>
    </div>
    // </div> 
  );
};

export default Screen;
