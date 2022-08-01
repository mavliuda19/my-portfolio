import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import {
	DiJavascript1,
	DiReact,
	DiHtml5,
	DiCss3,
	DiVisualstudio,
	DiBootstrap,
	DiGit,
} from 'react-icons/di'
import {
	SiFirebase,
	SiMaterialui,
	SiPostman,
	SiRedux,
	SiStyledcomponents,
	SiSass,
	SiVisualstudio,
} from 'react-icons/si'

export const Techstack = () => {
	return (
		<Container>
			<h1 className='project-heading'>
				<strong className='purple'>Technologies </strong>
				and
				<strong className='purple'> Tools </strong>
			</h1>
			<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
				<Col xs={4} md={2} className='tech-icons'>
					<DiHtml5 />
				</Col>

				<Col xs={4} md={2} className='tech-icons'>
					<DiCss3 />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<DiJavascript1 />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<DiReact />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<SiRedux style={{ width: '60px' }} />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<SiStyledcomponents />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<SiSass style={{ width: '60px' }} />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<SiMaterialui style={{ width: '60px' }} />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<DiBootstrap />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<DiGit />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<SiFirebase style={{ width: '60px' }} />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<DiVisualstudio />
				</Col>
				<Col xs={4} md={2} className='tech-icons'>
					<SiPostman style={{ width: '60px' }} />
				</Col>
			</Row>
		</Container>
	)
}
