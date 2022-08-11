import { AiFillGithub, AiFillMail } from 'react-icons/ai'
import { FaLinkedinIn, FaTelegram } from 'react-icons/fa'
import lms from '../assets/Projects/lms.png'
import portfolio from '../assets/Projects/portfolio.png'
import googleForms from '../assets/Projects/google_forms.png'
import github from '../assets/Projects/github.png'

export const projects = [
	{
		imgPath: lms,
		title: 'Peaksoft LMS',
		description:
			'Peaksoft LMS is an online learning platform aimed at achieving  effective interaction of students and teachers and convenient management of the educational process.',
		ghLink: 'https://github.com/peaksoft-school/peaksoft-lms-a-web',
		demoLink:
			'http://peaksoft-lms-app.s3-website.eu-central-1.amazonaws.com',
	},
	{
		imgPath: portfolio,
		title: 'Portfolio',
		description:
			'A portfolio website is a unique way to showcase my work and let others know about myself. In addition, it’s one of the best ways to express my personality, experience, and capabilities.',
		ghLink: 'https://github.com/soumyajit4419/Chatify',
	},
	{
		imgPath: googleForms,
		title: 'Google forms',
		description:
			'Google Forms is a quiz maker project which allows to create quizzes.',
		ghLink: 'https://github.com/mavliuda19/quiz-maker',
		demoLink: 'Https://forms-6f041.web.app/quiz',
	},
	{
		imgPath: github,
		title: 'GitHub User Finder',
		description:
			'GitHub User Finder is a Vanilla JS   based web application to find  GitHub users, see their info, and their latest repositories as well.',
		ghLink: 'https://github.com/mavliuda19/search-github-users',
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
