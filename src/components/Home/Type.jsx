import React from 'react'
import Typewriter from 'typewriter-effect'

export const Type = () => {
	return (
		<Typewriter
			options={{
				strings: ['Front-End Developer'],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	)
}
