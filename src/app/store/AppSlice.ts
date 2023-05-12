/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	showNavScreen:false
}

const AppSlice = createSlice({
	name:'AppSlice',
	initialState,
	reducers:{
	  updateNavScreenState:(state)=>{
		state.showNavScreen = !state.showNavScreen;
	  }	,
	}
})

export const {updateNavScreenState} = AppSlice.actions;
export default AppSlice.reducer;