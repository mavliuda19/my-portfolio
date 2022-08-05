import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { contacts } from '../../utils/constants'

export const Contacts = () => {
	return (
		<Container id='contacts' style={{ paddingBottom: '20px' }}>
			<Row>
				<Col md={12} className='home-about-social'>
					<h1>FIND ME ON</h1>
					<p>
						Feel free to <span className='purple'>connect </span>
						with me
					</p>
					<ul className='home-about-social-links'>
						{contacts.map((contact) => {
							return (
								<li className='social-icons' key={contact.href}>
									<a
										href={contact.href}
										target='_blank'
										rel='noreferrer'
										className='icon-colour  home-social-icons'
									>
										{contact.icon}
									</a>
								</li>
							)
						})}
					</ul>
				</Col>
			</Row>
		</Container>
	)
}
