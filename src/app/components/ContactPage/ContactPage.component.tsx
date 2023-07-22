import React, { useEffect, useRef, useState } from "react";
import ReduxActions from "../../actions/reduxActions";
import ReduxStates from "../../actions/reduxStates";
import './ContactPage.component.css';
import colorPallete from "../../data/colorPallete";

const ContactPage:React.FC<any> = () =>{
    const reduxActions = new ReduxActions();
	const reduxStates = new ReduxStates();
    const demoRef:any = useRef();
	// const [scrollPosition, setScrollPosition] = useState<number>(0)
	// const [fontSize, setFontSize] = useState(8);

	const handleScroll = () => {
		const position = window.pageYOffset;
		// setScrollPosition(position);
		let font = 8 - (position * 0.02);
		demoRef.current.style.fontSize = font+'rem';
		console.log(position," SCROLL-POSITIONNNNN");
	  };
	  
	//   useE 

	  useEffect(()=>{
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	  },[]);

	  useEffect(()=>{
		if(reduxStates.isLoadingScreenTurnedOn){
	       setTimeout(()=>{
			  reduxActions.dismissLoadingScreen();
		  }, 5000)
		}
	  },[]);
	return (
		<div className="contact-page">
		  <h1 ref={demoRef} style={{color:colorPallete[reduxStates.colorPalleteIndex].colorHex}}>Reeich.</h1>
		  <div className="contact-page-form">
			<div className="contact-tiles-link">
			  <img src="/assets/mail-logo.svg" alt="" />	
			  <p>desiriuss.dev@gmail.com</p>
			</div>
			<div className="contact-tiles-link">
			  <img src="/assets/github-black.svg" alt="" />	
			  <p>github.com/dopeUX</p>
			</div>
		  </div>
		</div>
	)
}


export default ContactPage;