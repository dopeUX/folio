/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useDispatch } from "react-redux";
import { updateColorPalleteIndex,updateIsMusicPlayerVisible, updateIsLoading, updateNavScreenState, updateScreenZoomState, updateIsWorkItemOverlay, updateIsWorkItemOverlayTurnedOn, updateCurrentWorkItemIndex, updateHeroSectionState, updateCurrentNavIndex } from "../store/AppSlice";
import { updateIsLoadingScreenTurnedOn } from "../store/AppSlice";
import { useNavigate } from "react-router-dom";

export default class ReduxActions {
   
	dispatch = useDispatch();
	navigate = useNavigate();
	constructor() {
		// this.dispatchFunction = dispatchFunction;
	}
	showLoadingScreen():void{
	 this.dispatch(updateIsLoading(true));
	 this.dispatch(updateIsLoadingScreenTurnedOn(true));
	}

	dismissLoadingScreen():void{
     this.dispatch(updateIsLoadingScreenTurnedOn(false))
	 setTimeout(()=>{
		this.dispatch(updateIsLoading(false));
	 },1200)		
	}

	showNavigationScreen():void{
	  this.dispatch(updateNavScreenState(true));
      this.dispatch(updateScreenZoomState("scale(0.95)"));
	}
    
	dismissNavigationScreen(): void {
	  this.dispatch(updateScreenZoomState("scale(1)"));
      setTimeout(() => {
        this.dispatch(updateNavScreenState(false));
      }, 600);
	}

	updateHeroSection(): void{
	  this.dispatch(updateHeroSectionState({
		screenZoom:'scale(0.9)'
	  }))	
	}

	changeRoute(route:any, turnOnLoading:boolean=false): void {
		if(turnOnLoading){
          this.dispatch(updateIsLoading(true));
		  this.dispatch(updateIsLoadingScreenTurnedOn(true));
		}
		
              // dispatch(updateLoadingMusicState(true));
        this.dispatch(updateScreenZoomState("scale(1)"));
		// this.dismissNavigationScreen();
        setTimeout(()=>{
          this.updateHeroSection()   
		}, 200)
		//new update ----
		// this.dispatch(updateNavScreenState(0.1));
		setTimeout(()=>{
            this.dispatch(updateNavScreenState(false))
		},400);
		
		setTimeout(()=>{
			this.navigate(route)
		},1300) 
	}

	updateColorPalleteIndex(): void {
		this.dispatch(updateColorPalleteIndex());
	}

    updateIsMusicPlayer(e:boolean) :void{
		this.dispatch(updateIsMusicPlayerVisible(e))
	}

	updateIsWorkItemOverlayState(e:boolean): void{
	  if(e){
		this.dispatch(updateIsWorkItemOverlay(true));
		// this.dispatch(updateIsWorkItemOverlayTurnedOn(true));

		setTimeout(()=>{
         this.dispatch(updateIsWorkItemOverlayTurnedOn(true));
		},100)
	  }else{
		this.dispatch(updateIsWorkItemOverlayTurnedOn(false));
		setTimeout(() => {
		  this.dispatch(updateIsWorkItemOverlay(false));	
		}, 1000);
	  }
	}

	updateCurrentWorkItemIndex(index:number): void{
		this.dispatch(updateCurrentWorkItemIndex(index));
	}

	updateCurrentNavIndex(index:number): void {
		this.dispatch(updateCurrentNavIndex(index))
	}

	
}


// export default reduxAction;