import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn, FaTelegram } from 'react-icons/fa'

const Contacts = () => {
	return (
		<Container id='contacts'>
			<Row>
				<Col md={12} className='home-about-social'>
					<h1>FIND ME ON</h1>
					<p>
						Feel free to <span className='purple'>connect </span>
						with me
					</p>
					<ul className='home-about-social-links'>
						<li className='social-icons'>
							<a
								href='https://github.com/mavliuda19'
								target='_blank'
								rel='noreferrer'
								className='icon-colour  home-social-icons'
							>
								<AiFillGithub />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://t.me/mavliuda19'
								target='_blank'
								rel='noreferrer'
								className='icon-colour  home-social-icons'
							>
								<FaTelegram />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.linkedin.com/in/mavliuda-baktyiar-kyzy-643104244/'
								target='_blank'
								rel='noreferrer'
								className='icon-colour  home-social-icons'
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.instagram.com/mavvvll8/'
								target='_blank'
								rel='noreferrer'
								className='icon-colour home-social-icons'
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	)
}

export default Contacts
