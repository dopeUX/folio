/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice } from "@reduxjs/toolkit";
import colorPallete from "../data/colorPallete";

const initialState = {
	showNavScreen:false,
	screenZoomState:'',
	isAccentColor:false,
	accentColor:'#32a852',
	colorPalleteIndex:0
}

const AppSlice = createSlice({
	name:'AppSlice',
	initialState,
	reducers:{
	  updateNavScreenState:(state)=>{
		state.showNavScreen = !state.showNavScreen;
	  },
	  updateScreenZoomState:(state, action)=>{
		state.screenZoomState = action.payload;
	  },
	  updateAccentColor:(state,action)=>{
		state.accentColor = action.payload;
	  },
	  updateColorPalleteIndex:(state)=>{
		// state.colorPalleteIndex = 2;
		if(state.colorPalleteIndex<colorPallete.length-1){
		 state.colorPalleteIndex = state.colorPalleteIndex + 1 ;
		}else{
			state.colorPalleteIndex = 0;
		}
	  }
	}
})

export const {updateNavScreenState, updateScreenZoomState, updateColorPalleteIndex} = AppSlice.actions;
export default AppSlice.reducer;