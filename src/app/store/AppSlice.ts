/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	showNavScreen:false,
	screenZoomState:''
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
	  }
	}
})

export const {updateNavScreenState, updateScreenZoomState} = AppSlice.actions;
export default AppSlice.reducer;