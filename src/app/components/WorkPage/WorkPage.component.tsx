/* eslint-disable no-mixed-spaces-and-tabs */
import React,{useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateIsLoadingScreenTurnedOn } from "../../store/AppSlice";
import './WorkPage.component.css';
import colorPallete from "../../data/colorPallete";
import WorkPageItemCard from "./WorkPageItemCard/WorkPageItemCard";
import workData from "../../data/projectsData";
import ReduxActions from "../../actions/reduxActions";

const WorkPage:React.FC<any> = () =>{
	const dispatch = useDispatch();
	const colorPalleteIndex = useSelector((state:RootState)=>{
		return state.appReducer.colorPalleteIndex;
	});
	const isLoadingScreenTurnedOn = useSelector((state:RootState)=>{
		return state.appReducer.isLoadingScreenTurnedOn;
	});
	const reduxActions = new ReduxActions();
	const demoRef:any = useRef();
	
	const handleScroll = () => {
		const position = window.pageYOffset;
		// setScrollPosition(position);
		let font = 8 - (position * 0.02);
		demoRef.current.style.fontSize = font+'rem';
		console.log(position," SCROLL-POSITIONNNNN");
	  };

	useEffect(()=>{
		// window.addEventListener('scroll', handleScroll, { passive: true });
		// return () => {
		// 	window.removeEventListener('scroll', handleScroll);
		// };
	},[]);  

	useEffect(()=>{
      if(isLoadingScreenTurnedOn){
		setTimeout(()=>{
			//min 1300 sec
		   reduxActions.dismissLoadingScreen();
		},5000)
	  }
	},[])
	return (
		<div className="work-page">
          <h1 ref={demoRef} style={{color:colorPallete[colorPalleteIndex].colorHex}}>work.</h1>
		  {/* {workData.map((item, index:number)=>{
			return <WorkPageItemCard keyy={index}/>
		  })} */}
		  <section className="detailed-work-section">
		   <h3>My projects ?</h3>
		    <div className="detailed-heads">
		      <h2>Impressive.</h2>
		      <h2>Astounding.</h2>
		    </div>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		    <p>Lets have a quick look at my projects</p>
			<div className="detailed-work-sec-items">
				<div className="work-item-card">
					<h3 className="item-title">De</h3>
					<div className="work-item-tile animate">
						<h4>Explore github.</h4>
					</div>
				</div>
				<div className="work-item-card">
					<h3 className="item-title">Notes Pro</h3>
					<div className="work-item-tile-image">
						<img className="" src="assets/projectimg1.png" alt="" />
					</div>
				</div>
				<div className="work-item-card">
					<h3 className="item-title">Teerex</h3>
					<div className="work-item-tile-image">
						<img className="" src="assets/projectimg2.png" style={{border:'3px solid #D43636'}} alt="" />
					</div>
				</div>
			</div>
		  </section>
		</div>
	)
}

export default WorkPage;