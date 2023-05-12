/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	counter:2
}

const AppSlice = createSlice({
	name:'AppSlice',
	initialState,
	reducers:{
	  updateCounter:(state)=>{
		state.counter++
	  }	,
	}
})

export const {updateCounter} = AppSlice.actions;
export default AppSlice.reducer;