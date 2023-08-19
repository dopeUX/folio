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
	projectName:'Notes Pro',
	projectDesc:'',
	assets:[
	 'projectimg1.png','projectimg1.png'	
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
	 'projectimg2.png',
	 'projectimg2.png'
	],
	techStack:[],
	githubUrl:'',
	liveUrl:''
  }
]

export default workData;