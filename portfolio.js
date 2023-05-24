import emoji from "react-easy-emoji";

export const greetings = {
	name: "Haldun Mammadzada",
	title: "Hi all, I'm Haldun",
	description:
		"I'm passionate Front-end web developer having an experience of web applications with Javascript and React.js, Next.js ",
	resumeLink:
		"file:///C:/Users/haldun.memmedzade/Desktop/Haldun's%20Resume.pdf",
};

export const openSource = {
	githubUserName: "HaldunMammadzade",
};

export const contact = {};

export const socialLinks = {
	// url: "https://github.com/HaldunMammadzade",
	linkedin: "https://www.linkedin.com/in/haldun-mammadzada/",
	github: "https://github.com/HaldunMammadzade",
	instagram: "https://www.instagram.com/haldun__m/",
	facebook: "https://www.facebook.com/profile.php?id=100075543795713",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Front-end Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
			
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		}
	]
};

export const SkillBars = [
	{
		Stack: "Frontend / Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend / ReactJS",
		progressPercentage: "70",
	}
];

export const educationInfo = [
	{
		schoolName: "Azerbaijan Ca University",
		subHeader: "Bachelor of Bussiness Managament",
		duration: "September 2013 - April 2017",
	},
	{
		schoolName: "CodeBit Programming Course",
		desc: "Learning Front-end Development",
		duration: "May 2019 - August 2019",
	},
];

export const experience = [
	// {
	// 	role: "Frontend Developer",
	// 	company: "TimeSoft Company",
	// 	companylogo: "/img/icons/common/timesoft.png",
	// 	date: "Apr 2019 – Jun 2019",
	// 	desc: "I worked as frontend web developer to design web based admin dashboards for Bootstrap and some other libraries.",
	// },
	{
		role: "Frontend Developer",
		company: "Virtual Azerbaijan Group of Companies",
		companylogo: "/img/icons/common/vac.jpg",
		date: "Apr 2019 – Jun 2019",
		desc: "I worked as frontend web developer to design web based admin dashboards for Bootstrap, Ant Design and some other libraries.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1haldun100/developer-portfolio",
		// link: "https://developer-portfolio-1haldun100.vercel.app/",
	}
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Haldun Mammadzada",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Haldun Mammadzada",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://developer-portfolio-1haldun100.vercel.app",
	keywords: [
		"Haldun ",
		"Haldun Mammadzada",
		"Portfolio",
		"Haldun Portfolio ",
		"Haldun Mammadzada Portfolio",
	],
}
