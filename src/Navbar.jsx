import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from './assets/logo.png'
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'

export const NavBar = () => {
	const [expand, updateExpanded] = useState(false)
	const [navColour, updateNavbar] = useState(false)
	const aboutSection = document.getElementById('about')
	const homeSection = document.getElementById('home')
	const projectSection = document.getElementById('projects')
	const contactSection = document.getElementById('contacts')

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true)
		} else {
			updateNavbar(false)
		}
	}
	const scrollToSection = (scrollElement) => {
		scrollElement.scrollIntoView({ behavior: 'smooth' })
	}

	window.addEventListener('scroll', scrollHandler)

	return (
		<Navbar
			expanded={expand}
			fixed='top'
			expand='md'
			className={navColour ? 'sticky' : 'navbar'}
		>
			<Container>
				<Navbar.Brand href='/' className='d-flex'>
					<img
						src={logo}
						className='img-fluid'
						alt='brand'
						style={{
							width: '60px',
							height: '50px',
							borderRadius: '50%',
						}}
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => {
						updateExpanded(expand ? false : 'expanded')
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto'>
						<Nav.Item>
							<span onClick={() => scrollToSection(homeSection)}>
								<AiOutlineHome
									style={{
										marginBottom: '2px',
										marginRight: '3px',
									}}
								/>
								Home
							</span>
						</Nav.Item>
						<Nav.Item>
							<span onClick={() => scrollToSection(aboutSection)}>
								<AiOutlineUser
									style={{
										marginBottom: '2px',
										marginRight: '3px',
									}}
								/>
								About
							</span>
						</Nav.Item>
						<Nav.Item>
							<span
								onClick={() => scrollToSection(projectSection)}
							>
								<AiOutlineFundProjectionScreen
									style={{
										marginBottom: '2px',
										marginRight: '3px',
									}}
								/>
								Projects
							</span>
						</Nav.Item>
						<Nav.Item>
							<span
								onClick={() => scrollToSection(contactSection)}
							>
								<CgFileDocument
									style={{
										marginBottom: '2px',
										marginRight: '3px',
									}}
								/>
								Contacts
							</span>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
