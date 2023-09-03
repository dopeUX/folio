/* eslint-disable no-mixed-spaces-and-tabs */
export interface workProps {
	id:number;
	projectName:string;
	projectDesc:string;
	assets:string[];
	techStack:Array<any>;
	githubUrl:string;
	liveUrl:string;
}
const workData:workProps[] = [
  {
	id:1,
	projectName:'Notes Pro',
	projectDesc:'"Unleash your note-taking potential with Notes Pro. Access your notes from any web browser, and enjoy easy organization, collaboration, and secure cloud storage. Make note-taking a breeze with Notes Pro – try it now!"',
	assets:[
	 'notes-pro1.jpg','notes-pro2.jpg','notes-pro3.jpg'	
	],
	techStack:['react-logo.svg', 'redux-logo.svg','js-logo.svg'],
	githubUrl:'https://github.com/dopeUX/Notes-pro',
	liveUrl:'https://notespro.netlify.app/'
  },
  {
	id:2,
	projectName:'Scoops n Smiles',
	projectDesc:'"Dive into a world of frozen delights with Scoops N Smiles, our React and Redux-powered ice cream haven. Discover a variety of irresistible flavors, order with ease, and track your treats, all while enjoying a secure and delightful shopping experience. Join us for a scoop of happiness today!"',
	assets:[
	 'scoopsnsmiles1.jpg','scoopsnsmiles2.jpg', 'scoopsnsmiles3.jpg'	
	],
	techStack:['react-logo.svg', 'js-logo.svg', 'redux-logo.svg', 'nodejs-logo.svg', 'ts-logo.svg', 'tailwind-logo.svg'],
	githubUrl:'https://github.com/dopeUX/Scoops-N-Smiles',
	liveUrl:'https://scoopsnsmiles.netlify.app/'
  },
  {
	id:3,
	projectName:'Teerex',
	projectDesc:'"Discover the perfect blend of style and technology at TeeRex. Our TypeScript and React-powered platform, enhanced by Redux, redefines the way you shop for clothing. Dive into a world of fashion with a wide range of choices, personalized suggestions, and a user-friendly interface. TeeRex makes shopping for your favorite looks a breeze. Elevate your wardrobe with us – start exploring TeeRex now!"',
	assets:[
	 'teerex1.jpg',
	 'teerex2.jpg'
	],
	techStack:['react-logo.svg', 'redux-logo.svg','js-logo.svg',, 'ts-logo.svg'],
	githubUrl:'https://github.com/dopeUX/TeeRex-EcommerceStore',
	liveUrl:'https://theteerexstore.netlify.app/'
  },
  {
	id:4,
	projectName:'BreakFast UI',
	projectDesc:'"Elevate your React development with BreakFast-UI. Our Storybook-powered component library serves up a delectable assortment of pre-designed UI components, ensuring that you can effortlessly create stunning interfaces for your web applications. Simplify your development process and enhance user experiences with BreakFast-UI – the secret ingredient to crafting beautiful React applications."',
	assets:[
     'breakfast1.jpg'
	],
	techStack:['react-logo.svg','redux-logo.svg', 'js-logo.svg',  'ts-logo.svg', 'storybook-logo.svg'],
	githubUrl:'https://github.com/dopeUX/BreakFast',
	liveUrl:'https://breakfast-ui.netlify.app/'
  },
  {
	id:5,
	projectName:'Home Inc.',
	projectDesc:'"Discover your dream home at Home Inc. Browse properties, explore virtual tours, and get expert guidance. Your new home is just a click away!"',
	assets:[
     'homeinc.jpg'
	],
	techStack:['html-logo.svg','css-logo.svg','js-logo.svg'],
	githubUrl:'https://github.com/dopeUX/Home-Inc',
	liveUrl:'https://homeinc.netlify.app/'
  },
  {
	id:6,
	projectName:'Starbucks',
	projectDesc:'"Welcome to the Starbucks Coffee Experience – where every cup tells a story. Dive into our world of handcrafted beverages, artisanal pastries, and a rich tapestry of flavors. Our React and Redux-powered website offers a seamless journey through our menu, personalized recommendations, and a convenient ordering system. Explore the essence of coffee like never before. Join us at Starbucks and let every sip be an adventure."',
	assets:[
     'starbuks.jpg'
	],
	techStack:['react-logo.svg', 'redux-logo.svg', 'js-logo.svg'],
	githubUrl:'https://github.com/dopeUX/Starbucks-UI',
	liveUrl:'https://uxnstarbucks.netlify.app/'
  }
]

export default workData;