import { AiFillGithub, AiFillMail } from 'react-icons/ai'
import { FaLinkedinIn, FaTelegram } from 'react-icons/fa'
import lms from '../assets/Projects/lms.png'
import portfolio from '../assets/Projects/portfolio.png'
import trello from '../assets/Projects/trello.png'
import googleForms from '../assets/Projects/google_forms.png'
import github from '../assets/Projects/github.png'

export const projects = [
	{
		imgPath: lms,
		title: 'Peaksoft LMS',
		description:
			'Peaksoft LMS is an online learning platform whose goal is to achieve effective interaction of students and teachers and convenient management of the educational process.',
		ghLink: 'https://github.com/soumyajit4419/Chatify',
		demoLink: 'https://chatify-49.web.app/',
	},
	{
		imgPath: portfolio,
		title: 'Portfolio',
		description:
			'Peaksoft LMS is an online learning platform whose goal is to achieve effective interaction of students and teachers and convenient management of the educational process.',
		ghLink: 'https://github.com/soumyajit4419/Chatify',
		demoLink: 'https://chatify-49.web.app/',
	},
	{
		imgPath: googleForms,
		title: 'Google forms',
		description:
			'Peaksoft LMS is an online learning platform whose goal is to achieve effective interaction of students and teachers and convenient management of the educational process.',
		ghLink: 'https://github.com/soumyajit4419/Chatify',
		demoLink: 'https://chatify-49.web.app/',
	},
	{
		imgPath: trello,
		title: 'Trello',
		description:
			'Peaksoft LMS is an online learning platform whose goal is to achieve effective interaction of students and teachers and convenient management of the educational process.',
		ghLink: 'https://github.com/soumyajit4419/Chatify',
		demoLink: 'https://chatify-49.web.app/',
	},
	{
		imgPath: github,
		title: 'Search GitHub Users',
		description:
			'Peaksoft LMS is an online learning platform whose goal is to achieve effective interaction of students and teachers and convenient management of the educational process.',
		ghLink: 'https://github.com/soumyajit4419/Chatify',
		demoLink: 'https://chatify-49.web.app/',
	},
]

export const contacts = [
	{
		href: 'https://github.com/mavliuda19',
		icon: <AiFillGithub />,
	},
	{
		href: 'https://t.me/mavliuda19',
		icon: <FaTelegram />,
	},
	{
		href: 'https://www.linkedin.com/in/mavliuda-baktyiar-kyzy-643104244/',
		icon: <FaLinkedinIn />,
	},
	{
		href: 'mailto:mavliuda.baktyiarkyzy@gmail.com',
		icon: <AiFillMail />,
	},
]
