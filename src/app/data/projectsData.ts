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
	projectDesc:'',
	assets:[
	 'notes-pro1.jpg','notes-pro2.jpg','notes-pro3.jpg'	
	],
	techStack:[],
	githubUrl:'',
	liveUrl:''
  },
  {
	id:2,
	projectName:'Scoops n Smiles',
	projectDesc:'',
	assets:[
	 'scoopsnsmiles1.jpg','scoopsnsmiles2.jpg', 'scoopsnsmiles3.jpg'	
	],
	techStack:[],
	githubUrl:'',
	liveUrl:''
  },
  {
	id:3,
	projectName:'Teerex',
	projectDesc:'',
	assets:[
	 'teerex1.jpg',
	 'teerex2.jpg'
	],
	techStack:[],
	githubUrl:'',
	liveUrl:''
  },
  {
	id:4,
	projectName:'BreakFast UI',
	projectDesc:'',
	assets:[
     'breakfast1.jpg'
	],
	techStack:[],
	githubUrl:'',
	liveUrl:''
  },
  {
	id:5,
	projectName:'Home Inc.',
	projectDesc:'',
	assets:[
     'homeinc.jpg'
	],
	techStack:[],
	githubUrl:'',
	liveUrl:''
  },
  {
	id:6,
	projectName:'Starbucks',
	projectDesc:'',
	assets:[
     'starbuks.jpg'
	],
	techStack:[],
	githubUrl:'',
	liveUrl:''
  }
]

export default workData;