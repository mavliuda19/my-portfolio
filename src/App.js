import { useEffect, useState } from 'react'
import './App.css'
import { Preloader } from './Preloader'
import './style.css'

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
			<div className='App'>hi</div>
		</>
	)
}

export default App
