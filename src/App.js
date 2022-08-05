import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { NavBar } from './Navbar'
import { Preloader } from './Preloader'
import { ScrollToTop } from './ScrollToTop'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home/Home'

function App() {
	const [load, upadateLoad] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false)
		}, 1200)

		return () => clearTimeout(timer)
	}, [])
	return (
		<>
			<Preloader load={load} />
			<div className='App' id={load ? 'no-scroll' : 'scroll'}>
				<NavBar />
				{/* <ScrollToTop /> */}
				<Home />
			</div>
		</>
	)
}

export default App
