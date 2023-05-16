/* eslint-disable no-mixed-spaces-and-tabs */
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateIsLoadingScreenTurnedOn } from "../../store/AppSlice";

const WorkPage:React.FC<any> = () =>{
	const dispatch = useDispatch();
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
	return <h1>WorkPage</h1>
}

export default WorkPage;