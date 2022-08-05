import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
// import Particle from '../Particle'
import trello from '../assets/Projects/trello.png'
import emotion from '../assets/Projects/emotion.png'
import googleForms from '../assets/Projects/google_forms.png'
import lms from '../assets/Projects/lms.png'
import github from '../assets/Projects/github.png'
import portfolio from '../assets/Projects/portfolio.png'

function Projects() {
	return (
		<Container fluid className='project-section' id="projects">
			{/* <Particle /> */}
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}
				>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={lms}
							isBlog={false}
							title='Peaksoft LMS'
							description='Peaksoft LMS is an online learning platform whose goal is to achieve effective interaction of students and teachers and convenient management of the educational process.'
							ghLink='https://github.com/soumyajit4419/Chatify'
							demoLink='https://chatify-49.web.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={portfolio}
							isBlog={false}
							title='Portfolio'
							description='renders it using Next.js. Supports dark mode and easy to write blogs using markdown.'
							ghLink='https://github.com/soumyajit4419/Bits-0f-C0de'
							demoLink='https://blogs.soumya-jit.tech/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={googleForms}
							isBlog={false}
							title='Google forms'
							description='of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage'
							ghLink='https://github.com/soumyajit4419/Editor.io'
							demoLink='https://editor.soumya-jit.tech/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={trello}
							isBlog={false}
							title='Trello'
							description='model usieaves. The model was succ unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.'
							ghLink='https://github.com/soumyajit4419/Plant_AI'
							demoLink='https://plant49-ai.herokuapp.com/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={github}
							isBlog={false}
							title='Search GitHub Users'
							description="'s suicide ideation in cyberspace  and thus helping in sucide prevention."
							ghLink='https://github.com/soumyajit4419/AI_For_Social_Good'
							// demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Projects
