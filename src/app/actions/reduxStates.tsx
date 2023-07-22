/* eslint-disable no-mixed-spaces-and-tabs */
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

/* eslint-disable @typescript-eslint/no-empty-function */
export default class ReduxStates {
	constructor() {}

	colorPalleteIndex = useSelector((state: RootState) => {
		return state.appReducer.colorPalleteIndex;
	});

	accentColor = useSelector((state: RootState) => {
		return state.appReducer.isAccentColor;
	});

	isNavScreenOn = useSelector((state: RootState) => {
		return state.appReducer.showNavScreen;
	});
    
	isLoading = useSelector((state: RootState) => {
		return state.appReducer.isLoading;
	});
   
	isLoadingMusic = useSelector((state:RootState) => {
		return state.appReducer.isLoadingMusic;
	})

	isLoadingScreenTurnedOn = useSelector((state: RootState) => {
		return state.appReducer.isLoadingScreenTurnedOn;
	});

	isShowNavScreen = useSelector((state: RootState) => {
		return state.appReducer.showNavScreen;
	});

	screenZoomState = useSelector((state: RootState) => {
		return state.appReducer.screenZoomState;
	});

	isMusicPlayerVisible = useSelector((state: RootState)=>{
		return state.appReducer.isMusicPlayerVisible;
	})
}