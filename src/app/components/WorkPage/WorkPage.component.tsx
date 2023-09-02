/* eslint-disable no-mixed-spaces-and-tabs */
'use client';
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
	const detailedSectionRef:any = useRef();
	
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
		setTimeout(()=>{
		  detailedSectionRef.current.style.opacity = 1;
		  detailedSectionRef.current.style.transform = 'translateY(10px) scale(1.0)';
		},600)

		setTimeout(()=>{
		//   detailedSectionRef.current.style.transform = 'translateY(20px)'
		},1200)
	},[])

	useEffect(()=>{
      if(isLoadingScreenTurnedOn){
		setTimeout(()=>{
			//min 1300 sec
		//    reduxActions.dismissLoadingScreen();
		},2000)
	  }
	},[])
	return (
		<div className="work-page">
          <h1 ref={demoRef} style={{color:colorPallete[colorPalleteIndex].colorHex}}>work.</h1>
		  {/* {workData.map((item, index:number)=>{
			return <WorkPageItemCard keyy={index}/>
		  })} */}
		  {/* <img className="side-image" src="assets/work-nav.svg" alt="" /> */}
		  <section ref={detailedSectionRef} className="detailed-work-section">
		   <h3>My projects ?</h3>
		    <div className="detailed-heads">
		      <h2>Sleek.</h2>
		      <h2>Chic.</h2>
		    </div>
			<p>"Welcome to my digital playground where I spin MERN magic into web wonders! From whipping up e-commerce enchantments that make shopping a breeze, to summoning social platforms where connections flourish, and crafting data dashboards that turn numbers into a symphony, I'm the web sorcerer you've been waiting for. Join me on a spellbinding journey through pixels and code, where every project is a potion of creativity and tech trickery!"</p>
		    <p className="other-p">Lets have a quick look at my projects</p>
			<div className="detailed-work-sec-items scroll">
			<div className="white-grad-overlay"></div>
			<div className="white-grad-overlay"></div>
			<div className="white-grad-overlay"></div>
			<div className="white-grad-overlay"></div>
				<div className="work-item-card">
					<h3 className="item-title">De</h3>
					<a href="https://www.github.com/dopeUX" target="_blank">
					<div className="work-item-tile animate">
						<h4>Explore github.</h4>
					</div>
					</a>
				</div>

				{/* //cards ---- */}
				{workData.map((item:workProps, index:number)=>{
					return <WorkPageItemCardNew title={item.projectName} image={`assets/projectImages/`+item.assets[0]} index={index}/>
				})}
				{/* <div className="non-displaying-images">
					<img src="assets/projectImages/scoopsnsmiles1.jpg" alt="" />
					<img src="assets/projectImages/scoopsnsmiles2.jpg" alt="" />
					<img src="assets/projectImages/scoopsnsmiles3.jpg" alt="" />
					<img src="assets/projectImages/teerex2.jpg" alt="" />
					<img src="assets/projectImages/notes-pro2.jpg" alt="" />
					<img src="assets/projectImages/notes-pro3.jpg" alt="" />
				</div> */}
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