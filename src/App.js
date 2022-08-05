import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './layout/Navbar'
import { Preloader } from './layout/Preloader'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './components/Home/Home'

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
				<Home />
			</div>
		</>
	)
}

export default App
