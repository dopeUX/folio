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
		  </section>
		</div>
	)
}

export default WorkPageItemCard;