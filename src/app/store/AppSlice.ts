/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice } from "@reduxjs/toolkit";
import colorPallete from "../data/colorPallete";
import loadingMusic from "../data/loadingMusic";

const initialState = {
	showNavScreen:false,
	screenZoomState:'',
	isAccentColor:false,
	accentColor:'#32a852',
	colorPalleteIndex:0,
	isLoading:false,
	loadingScreenAnim:'',
	isLoadingScreenTurnedOn:false,
	isAppInitiallyRendered:true,
	isLoadingMusic:false,
	loadingMusicIndex:0
}

const AppSlice = createSlice({
	name:'AppSlice',
	initialState,
	reducers:{
	  updateIsAppInitiallyRendered:(state)=>{
        state.isAppInitiallyRendered = false;
	  },
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
	  },
	  updateIsLoading:(state,action)=>{
		state.isLoading = action.payload;
	  },
	  updateIsLoadingScreenTurnedOn:(state, action)=>{
		state.isLoadingScreenTurnedOn = action.payload
	  },
	  updateLoadingMusicState:(state,action)=>{
        state.isLoadingMusic = action.payload;
	  },
	  updateLoadingMusicIndex:(state, action)=>{
		if(action){
			state.loadingMusicIndex = action.payload
		}else{
			if(state.loadingMusicIndex < loadingMusic.length-1)
			  state.loadingMusicIndex + 1
			else
			  state.loadingMusicIndex = 0  
		}
	  }
	}
})

export const {updateNavScreenState, updateScreenZoomState, updateColorPalleteIndex, updateIsLoading, updateIsLoadingScreenTurnedOn, updateLoadingMusicState} = AppSlice.actions;
export default AppSlice.reducer;