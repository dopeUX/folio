import React from "react";
import ReduxActions from "../../../actions/reduxActions";

const WorkPageItemCardNew:React.FC<any> = ({title, image, index}) => {
	const reduxActions = new ReduxActions();
	
	return (<div className="work-item-card" onClick={()=>{
		      reduxActions.updateCurrentWorkItemIndex(index);
              reduxActions.updateIsWorkItemOverlayState(true);
        	}}>
	        <h2 className="item-title">{title}</h2>
	        <div className="work-item-tile-image">
	        	<img className="" src={image} alt="" />
	        </div>
        </div>)
}

export default WorkPageItemCardNew;