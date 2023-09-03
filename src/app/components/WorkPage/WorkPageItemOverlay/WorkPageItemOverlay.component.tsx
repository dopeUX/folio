'use client';
import React, { useEffect, useRef, useState } from "react";
import './WorkPageItemOverlay.css';
import ReduxStates from "../../../actions/reduxStates";
import ReduxActions from "../../../actions/reduxActions";
import workData, { workProps } from "../../../data/projectsData";

const WorkPageItemOverlay:React.FC<any> = () =>{
	const reduxStates = new ReduxStates();
	const overlayScreenRef:any = useRef<any>();
	const reduxActions = new ReduxActions();
	const [workItem, setWorkItem] = useState<workProps>();
	// const [lastNum, setLastNum] = useState<number>(0);
	let lastNum = workItem?.assets.length;
	// let className = '';
	const titleRef:any = useRef();
	let [className, setClassName] = useState<any>('first');
    


	useEffect(()=>{
		switch (lastNum) {
			case 0:
				setClassName('first')
				break;
		    case 1:
				setClassName('first')
				break;
			case 2:
				setClassName('second')
				break;
			case 3:
				setClassName('third')
				break;		
			default:
				break;
		}	
		console.log(className, 'caaaaa');
	},[lastNum])
	
	useEffect(()=>{
		console.log(reduxStates.isWorkItemOverlayTurnedOn, 'kkkkk')
       if(reduxStates.isWorkItemOverlayTurnedOn){
         overlayScreenRef.current.style.opacity = 1;
	   }else{
		overlayScreenRef.current.style.opacity = 0;
	   }
	},[reduxStates.isWorkItemOverlayTurnedOn]);

	useEffect(()=>{
      setWorkItem(workData[reduxStates.currentWorkItemIndex])
	  const titleArr = workItem?.projectName.split(' ');
	//   setLastNum(workItem?.assets.length);
	  return ()=>{
		lastNum = 0;
		// className = '';
	  }
	},[reduxStates.currentWorkItemIndex]);

	useEffect(()=>{
       
	},[className])

	function getTitle():any{
	 let timeDelay = 0;	
	 const r = workItem?.projectName.split(' ').map((x:any, i:number)=>{
		timeDelay = timeDelay + 1000;
		let text = document.createElement('h2');
		text.innerHTML = x;
         console.log(text, 'fffff')
		return text;
	 })
	  return r;
	}

    function decideComponent(){
      if(className == 'first'){
		return(
			<section className="images-section-first">
		     <img loading="lazy" className="zoom-out" src={'assets/projectImages/'+workItem?.assets[0]} alt="" />
			</section>
		)
	  }		
	  if(className == 'second'){
		return (<section className="images-section-second">
	    <img loading="lazy" className="img1-anim" src={'assets/projectImages/'+workItem?.assets[0]} alt="" />
	    <img loading="lazy" className="image2 img2-anim" src={'assets/projectImages/'+workItem?.assets[1]} alt="" />
	  </section>)
	  }else if(className == 'third'){
        return (<section className="images-section-third">
		<img loading="lazy" className="image3 img3-anim" src={'assets/projectImages/'+workItem?.assets[2]} alt="" />	
	    <img loading="lazy" className="image1 zoom-out" src={'assets/projectImages/'+workItem?.assets[0]} alt="" />
	    <img loading="lazy" className="image2 img2-anim" src={'assets/projectImages/'+workItem?.assets[1]} alt="" />
	     </section>)
	  }else {
		return null;
	  }
	}

	return <div ref={overlayScreenRef} className="work-page-item-overlay">
    <div className="content">	
	  <div className="close-icon" onClick={()=>{
		reduxActions.updateIsWorkItemOverlayState(false);
	  }}></div>
	  <div className="work-title-arr">
		{
			// getTitle()
		//   workItem?.projectName.split(' ').map((x:any, i:number)=>{
		// 	return (
		// 		<h2>{x}</h2>
		// 	)
		//   })	
		}
       <h2 ref={titleRef} className="animate-slideup">{workItem?.projectName}</h2>
	  </div>
	  {decideComponent()}
	   <p>{workItem?.projectDesc}</p>
	   <div className="stack-icons">
		 {
			workItem?.techStack.map((icon, index)=>{
				return(
					<img src={`/assets/${icon}`} alt="" />
				)
			})
		 }
	   </div>
	   <div className="action-btns">
				<div className="action-btn-tab">
			    	<h3>Visit</h3>
					<a href={workItem?.liveUrl} target="_blank">
					 <img src="/assets/arrow-right.svg" alt="" />
					</a>
				</div>
				<div className="action-btn-tab">
			    	<h3>Repo</h3>
					<a href={workItem?.githubUrl} target="_blank">
					 <img src="/assets/arrow-right.svg" alt="" />
				    </a>
				</div>
				
			</div>
	  </div>	
	</div>
}

export default WorkPageItemOverlay;