/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import './WorkPageItemCard.css';
import workData from "../../../data/projectsData";

const WorkPageItemCard:React.FC<any> = ({keyy}) =>{
	const [isShuffled, setIsShuffled] = useState(false);
	return (
		<div className={`work-page-item-card ${keyy===0 ? 'row' : 'reverse-row'}`}>
          <section className={`${isShuffled && 'item-card-image-section-shuffled'} item-card-image-section-cards`} 
		  onMouseEnter={()=>{
			setIsShuffled(true);
		  }}
		  onMouseLeave={()=>{
			setIsShuffled(false);
		  }}>
			<img className="image1" src="/assets/scoopsnsmiles1.jpeg" alt="" />
			<img className="image2" src="/assets/scoopsnsmiles2.jpeg" alt="" />
			<img className="image3" src="/assets/scoopsnsmiles3.jpeg" alt="" />
		  </section>

		  <section className="item-card-details-section">
            <h2>Scoops N Smiles</h2>
			<p>A Full stack Tasty Ice cream application</p>

			<div className="stack-icons">
				<img src="/assets/react-logo.svg" alt="" />
				<img src="/assets/js-logo.svg" alt="" />
				<img src="/assets/redux-logo.svg" alt="" />
				<img src="/assets/nodejs-logo.svg" alt="" />
				<img src="/assets/ts-logo.svg" alt="" />
				<img src="/assets/tailwind-logo.svg" alt="" />
			</div>

			<div className="action-btns">
				<div className="action-btn-tab">
			    	<h3>Visit</h3>
					<img src="/assets/arrow-right.svg" alt="" />
				</div>
				<div className="action-btn-tab">
			    	<h3>Repo</h3>
					<img src="/assets/arrow-right.svg" alt="" />
				</div>
				
			</div>
		  </section>
		</div>
	)
}

export default WorkPageItemCard;