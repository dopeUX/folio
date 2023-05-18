/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import './WorkPageItemCard.css';
import workData from "../../../data/projectsData";

const WorkPageItemCard:React.FC<any> = ({prop}) =>{
	return (
		<div className="work-page-item-card">
          <section className="item-card-image-section">
			<img className="image1" src="/public/assets/scoopsnsmiles1.png" alt="" />
			<img className="image2" src="/public/assets/scoopsnsmiles2.png" alt="" />
			<img className="image3" src="/public/assets/scoopsnsmiles3.png" alt="" />
		  </section>

		  <section className="item-card-details-section">
            <h2>Scoops N Smiles</h2>
			<p>A Full stack Tasty Ice cream application</p>

			<div className="stack-icons">
				<img src="/public/assets/react-logo.svg" alt="" />
				<img src="/public/assets/js-logo.svg" alt="" />
				<img src="/public/assets/redux-logo.svg" alt="" />
				<img src="/public/assets/nodejs-logo.svg" alt="" />
				<img src="/public/assets/ts-logo.svg" alt="" />
				<img src="/public/assets/tailwind-logo.svg" alt="" />
			</div>

			<div className="action-btns">
				<div className="action-btn-tab">
			    	<h3>Visit</h3>
			    	<h3>Repo</h3>
				</div>
				
			</div>
		  </section>
		</div>
	)
}

export default WorkPageItemCard;