/* eslint-disable no-mixed-spaces-and-tabs */
import React,{useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateIsLoadingScreenTurnedOn } from "../../store/AppSlice";
import './WorkPage.component.css';
import colorPallete from "../../data/colorPallete";
import WorkPageItemCard from "./WorkPageItemCard/WorkPageItemCard";
import workData, { workProps } from "../../data/projectsData";
import ReduxActions from "../../actions/reduxActions";
import WorkPageItemCardNew from "./WorkPageItemCardNew/WorkPageItemCardNew.component";

const WorkPage:React.FC<any> = () =>{
	const dispatch = useDispatch();
	const colorPalleteIndex = useSelector((state:RootState)=>{
		return state.appReducer.colorPalleteIndex;
	});
	const isLoadingScreenTurnedOn = useSelector((state:RootState)=>{
		return state.appReducer.isLoadingScreenTurnedOn;
	});
	const reduxActions = new ReduxActions();
	const demoRef:any = useRef();
	
	const handleScroll = () => {
		const position = window.pageYOffset;
		// setScrollPosition(position);
		let font = 8 - (position * 0.02);
		demoRef.current.style.fontSize = font+'rem';
		console.log(position," SCROLL-POSITIONNNNN");
	  };

	useEffect(()=>{
		// window.addEventListener('scroll', handleScroll, { passive: true });
		// return () => {
		// 	window.removeEventListener('scroll', handleScroll);
		// };
	},[]);  

	useEffect(()=>{
      if(isLoadingScreenTurnedOn){
		setTimeout(()=>{
			//min 1300 sec
		   reduxActions.dismissLoadingScreen();
		},5000)
	  }
	},[])
	return (
		<div className="work-page">
          <h1 ref={demoRef} style={{color:colorPallete[colorPalleteIndex].colorHex}}>work.</h1>
		  {/* {workData.map((item, index:number)=>{
			return <WorkPageItemCard keyy={index}/>
		  })} */}
		  {/* <img className="side-image" src="assets/work-nav.svg" alt="" /> */}
		  <section className="detailed-work-section">
		   <h3>My projects ?</h3>
		    <div className="detailed-heads">
		      <h2>Impressive.</h2>
		      <h2>Astounding.</h2>
		    </div>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		    <p>Lets have a quick look at my projects</p>
			<div className="detailed-work-sec-items">
			<div className="white-grad-overlay"></div>
			<div className="white-grad-overlay"></div>
			<div className="white-grad-overlay"></div>
			<div className="white-grad-overlay"></div>
				<div className="work-item-card">
					<h3 className="item-title">De</h3>
					<div className="work-item-tile animate">
						<h4>Explore github.</h4>
					</div>
				</div>

				{/* //cards ---- */}
				{workData.map((item:workProps, index:number)=>{
					return <WorkPageItemCardNew title={item.projectName} image={`assets/`+item.assets[0]} index={index}/>
				})}
				{/* <WorkPageItemCardNew title='Notes Pro' image='assets/projectimg1.png'/>
				<WorkPageItemCardNew title='TeeRex' image='assets/projectimg2.png'/>
				<WorkPageItemCardNew title='TeeRex' image='assets/projectimg2.png'/>
				<WorkPageItemCardNew title='TeeRex' image='assets/projectimg2.png'/> */}
			</div>
		  </section>
		</div>
	)
}

export default WorkPage;