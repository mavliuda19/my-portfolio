import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { About } from '../About/About'
import homeLogo from '../assets/home-main.png'
import Contacts from '../Contact/Contacts'
import Projects from '../Project/Projects'
// import { Particle } from './Particle'
// import Home2 from './Home2'
import { Type } from './Type'

export const Home = () => {
	return (
		<section>
			<Container fluid className='home-section' id='home'>
				{/* <Particle /> */}
				<Container className='home-content'>
					<Row>
						<Col md={7} className='home-header'>
							<h1
								style={{ paddingBottom: 15 }}
								className='heading'
							>
								Hi There!{' '}
								<span
									className='wave'
									role='img'
									aria-labelledby='wave'
								>
									👋🏻
								</span>
							</h1>

							<h1 className='heading-name'>
								I'M
								<strong className='main-name'>
									{' '}
									Mavliuda Baktyiar kyzy
								</strong>
							</h1>

							<div style={{ padding: 50, textAlign: 'left' }}>
								<Type />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={homeLogo}
								alt='home pic'
								className='img-fluid'
								style={{ maxHeight: '450px' }}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<About />
			<Projects />
			<Contacts />
		</section>
	)
}
