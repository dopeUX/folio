/* eslint-disable no-mixed-spaces-and-tabs */
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateIsLoadingScreenTurnedOn } from "../../store/AppSlice";
import './WorkPage.component.css';
import colorPallete from "../../data/colorPallete";
import WorkPageItemCard from "./WorkPageItemCard/WorkPageItemCard";

const WorkPage:React.FC<any> = () =>{
	const dispatch = useDispatch();
	const colorPalleteIndex = useSelector((state:RootState)=>{
		return state.appReducer.colorPalleteIndex;
	});
	const isLoadingScreenTurnedOn = useSelector((state:RootState)=>{
		return state.appReducer.isLoadingScreenTurnedOn;
	});
	useEffect(()=>{
      if(isLoadingScreenTurnedOn){
		setTimeout(()=>{
		    dispatch(updateIsLoadingScreenTurnedOn(false));	
		},1000)
	  }
	},[])
	return (
		<div className="work-page">
          <h1 style={{color:colorPallete[colorPalleteIndex].colorHex}}>work.</h1>
		  <WorkPageItemCard/>
		</div>
	)
}

export default WorkPage;