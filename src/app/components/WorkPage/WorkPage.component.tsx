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
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
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
		  {workData.map((item, index:number)=>{
			return <WorkPageItemCard keyy={index}/>
		  })}
		</div>
	)
}

export default WorkPage;