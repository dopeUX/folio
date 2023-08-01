/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useDispatch } from "react-redux";
import { updateColorPalleteIndex,updateIsMusicPlayerVisible, updateIsLoading, updateNavScreenState, updateScreenZoomState, updateIsWorkItemOverlay, updateIsWorkItemOverlayTurnedOn } from "../store/AppSlice";
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

	changeRoute(route:any): void {
		this.dispatch(updateIsLoading(true));
              // dispatch(updateLoadingMusicState(true));
        this.dispatch(updateIsLoadingScreenTurnedOn(true));
        this.dispatch(updateScreenZoomState("scale(1)"));
        setTimeout(() => {
          this.dispatch(updateNavScreenState(false));
        }, 600);
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

	
}


// export default reduxAction;