import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { projects } from '../../utils/constants'

export const Projects = () => {
	return (
		<Container fluid className='project-section' id='projects'>
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
					{projects.map((project) => {
						return (
							<Col
								md={4}
								className='project-card'
								key={project.title}
							>
								<ProjectCard
									imgPath={project.imgPath}
									isBlog={false}
									title={project.title}
									description={project.description}
									ghLink={project.ghLink}
									demoLink={project.demoLink}
								/>
							</Col>
						)
					})}
				</Row>
			</Container>
		</Container>
	)
}
