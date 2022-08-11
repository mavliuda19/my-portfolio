import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../assets/avatar.png'
import Tilt from 'react-parallax-tilt'
import { Techstack } from './TechStack'

export const About = () => {
	return (
		<>
			<Container fluid className='home-about-section' id='about'>
				<Container>
					<Row>
						<Col md={8} className='home-about-description'>
							<h1 style={{ fontSize: '2.6em' }}>
								<span className='purple'>ABOUT ME </span>
							</h1>
							<p className='home-about-body'>
								I’m a Front-End Developer located in Kyrgyzstan.
								<br />
								<br />I have a serious passion for &nbsp;
								<i>
									<b className='purple'>
										UI effects, animation &nbsp;
									</b>
								</i>
								and creating &nbsp;
								<i>
									<b className='purple'>
										intuitive, dynamic user experiences.
									</b>
								</i>
								<br />
								<br />
								My field of Interest's are building new &nbsp;
								<i>
									<b className='purple'>
										Web Technologies and Products &nbsp;
									</b>
								</i>
								<br />
								<br />
								Whenever possible, I also apply my passion to
								product development with
								<b className='purple'> &nbsp;Node.js</b> and
								<i>
									<b className='purple'>
										&nbsp;Modern Javascript Library and
										Frameworks
									</b>
								</i>
								&nbsp; such as
								<i>
									<b className='purple'>
										&nbsp;React.js and Next.js
									</b>
								</i>
							</p>
						</Col>
						<Col md={4} className='myAvtar'>
							<Tilt>
								<img
									style={{
										borderRadius: '50%',
										width: '400px',
										height: '390px',
									}}
									src={myImg}
									className='img-fluid'
									alt='avatar'
								/>
							</Tilt>
						</Col>
					</Row>
				</Container>
			</Container>
			<Techstack />
		</>
	)
}
