/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React,{useRef, useEffect} from "react";
import './Navigation.component.css';
import Navbar from "../../common/Navbar/Navbar";
import navItems from "../../data/navbarItems";
import { useDispatch, useSelector } from "react-redux";
import { updateNavScreenState, updateScreenZoomState } from "../../store/AppSlice";
import { RootState } from "../../store/store";

const Navigation:React.FC<any> = ({isNavScreenOn}) =>{
	const navScreenRef:any = useRef();
	const isAccentColor = useSelector((state:RootState)=>{
		return state.appReducer.isAccentColor;
	})
	const accentColor = useSelector((state:RootState)=>{
		return state.appReducer.accentColor;
	})
	const dispatch = useDispatch();
	const color = accentColor;
	useEffect(()=>{
      if(isNavScreenOn){
		setTimeout(()=>{
			navScreenRef.current.style.opacity = 1
		},1)
	  }
	},[isNavScreenOn])
	useEffect(()=>{
	  if(!isAccentColor){
		navScreenRef.current.style.background = '';
	  }else{	
      navScreenRef.current.style.background = `linear-gradient(90deg, ${color}1B 0%, ${color}B0 30%, ${color}EA 55%, ${color}FF 100%)`;
	  }
	},[])
	return (
		<div ref={navScreenRef} className="navigation-screen">
		  <div className="nav-screen-wrapper"
		    onMouseEnter={()=>{
		    //   console.log('entered')
		    }}
		    onMouseLeave={()=>{
				navScreenRef.current.style.opacity = 0
			    dispatch(updateScreenZoomState('scale(1)'))
		         setTimeout(()=>{
                 dispatch(updateNavScreenState());
		     },600)
			//   console.log('left')
		    }}>
           <div className="nav-items">
		     <Navbar navItems={navItems}/>
		   </div>
		   </div>
		</div>
	)
}

export default Navigation;