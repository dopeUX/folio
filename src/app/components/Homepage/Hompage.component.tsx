/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import './Homepage.component.css';
import Hamburger from "../../common/Hamburger/Hamburger";

const Homepage:React.FC<any> = () => {
  return (
	<section className="homepage">
	  <h1>Bonjour!</h1>
	  <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI</p>
	  
	  <div className="homepage-social-logos">
	  <a href="">
	   <img src="/public/assets/github-logo.svg" alt="" />
	  </a>	
	  <a href="">
	   <img src="/public/assets/linkedin-logo.svg" alt="" />
	  </a>
	  </div>

	  <section className="test">
	  <Hamburger/>
	  </section>
	</section>
  )	
}

export default Homepage