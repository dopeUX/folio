/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useRef, useState } from "react";
import { updateIsLoadingScreenTurnedOn } from "../../store/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import './AboutPage.component.css';
import ReduxStates from "../../actions/reduxStates";
import colorPallete from "../../data/colorPallete";
import ReduxActions from "../../actions/reduxActions";

const AboutPage:React.FC<any> = () =>{
	const dispatch = useDispatch();
	const reduxStates = new ReduxStates();
	const reduxActions = new ReduxActions();
	const colorPalleteIndex = reduxStates.colorPalleteIndex;
	const isLoadingScreenTurnedOn = reduxStates.isLoadingScreenTurnedOn;
	const color = colorPallete[colorPalleteIndex].colorHex;
    const demoRef:any = useRef();
	
	const handleScroll = () => {
		const position = window.pageYOffset;
		// setScrollPosition(position);
		let font = 8 - (position * 0.02);
		demoRef.current.style.fontSize = font+'rem';
		console.log(position," SCROLL-POSITIONNNNN");
	  };

	useEffect(()=>{
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	},[]);  
	useEffect(()=>{
      if(isLoadingScreenTurnedOn){
		// setTimeout(()=>{
		// 	reduxActions.dismissLoadingScreen();
		// }, 5000)
	  }
	},[]);

	

	return (
	  <div className="about-page">
		<h1 ref={demoRef} style={{color:colorPallete[colorPalleteIndex].colorHex}}>About.</h1>
	    <p className="title-desc">"Experienced freelancer with over three years of expertise in mobile and web development. Specialized in Android and Flutter mobile app development and MERN stack web development. Passionate about coding, problem-solving, and delivering high-quality solutions to clients. Highly adaptable and able to work independently or collaboratively in a team environment. Committed to staying up-to-date with the latest technologies and techniques to continuously improve skills and stay ahead of the curve."</p>

        <section className="detailed-section">
		 <section className="about-page-tile">
			<h3 style={{color:color}}>Education.</h3>
			<p>Bachelors Of Engineering (Civil Engineering)</p>
		 </section>
		 <section className="about-page-tile">
			<h3 style={{color:color}}>Experience.</h3>
			<p>Serrala Corestone.(2022)</p>
		 </section>
		 <section className="about-page-tile">
			<h3 style={{color:color}}>Crónicas de Frameworks.</h3>
			<ul>
				<li>Android</li>
				<li>React JS</li>
				<li>Node JS</li>
				<li>Tailwind</li>
				<li>Flutter</li>
				<li>Next</li>
				<li>Ethereum (Web3)</li>
				<li>Tailwind</li>
			</ul>
		 </section>
		 <section className="about-page-tile">
			<h3 style={{color:color}}>Dialectos del Código.</h3>
			<ul>
				<li>Javascript</li>
				<li>Typescript</li>
				<li>Dart</li>
				<li>Java 8</li>
				<li>Html/Css</li>
				<li>Solidity</li>
			</ul>
		 </section>
        
		 </section>
		 <img className="about-page-image" src="/assets/about-page-image.jpeg" alt="" />
	  </div>
	)
}

export default AboutPage;