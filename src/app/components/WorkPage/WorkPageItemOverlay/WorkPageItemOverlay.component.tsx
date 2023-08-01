import React, { useEffect, useRef } from "react";
import './WorkPageItemOverlay.css';
import ReduxStates from "../../../actions/reduxStates";
import ReduxActions from "../../../actions/reduxActions";

const WorkPageItemOverlay:React.FC<any> = () =>{
	const reduxStates = new ReduxStates();
	const overlayScreenRef:any = useRef<any>();
	const reduxActions = new ReduxActions();

	useEffect(()=>{
		console.log(reduxStates.isWorkItemOverlayTurnedOn, 'kkkkk')
       if(reduxStates.isWorkItemOverlayTurnedOn){
         overlayScreenRef.current.style.opacity = 1;
	   }else{
		overlayScreenRef.current.style.opacity = 0;
	   }
	},[reduxStates.isWorkItemOverlayTurnedOn]);

	return <div ref={overlayScreenRef} className="work-page-item-overlay">
    <div className="content">	
	  <div className="close-icon" onClick={()=>{
		reduxActions.updateIsWorkItemOverlayState(false);
	  }}></div>
      <h2>Notes Pro.</h2>
	  <section className="images-section">
	    <img src="assets/projectimg1.png" alt="" />
	    <img className="image2" src="assets/projectimg1.png" alt="" />
	  </section>
	   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
	   <div className="stack-icons">
				<img src="/assets/react-logo.svg" alt="" />
				<img src="/assets/js-logo.svg" alt="" />
				<img src="/assets/redux-logo.svg" alt="" />
				<img src="/assets/nodejs-logo.svg" alt="" />
				<img src="/assets/ts-logo.svg" alt="" />
				<img src="/assets/tailwind-logo.svg" alt="" />
	   </div>
	   <div className="action-btns">
				<div className="action-btn-tab">
			    	<h3>Visit</h3>
					<img src="/assets/arrow-right.svg" alt="" />
				</div>
				<div className="action-btn-tab">
			    	<h3>Repo</h3>
					<img src="/assets/arrow-right.svg" alt="" />
				</div>
				
			</div>
	  </div>	
	</div>
}

export default WorkPageItemOverlay;