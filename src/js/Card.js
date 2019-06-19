import React, { useState } from "react"
import { useIntersectionObserver } from "./useIntersectionObserver"

const Card = ({ children }) => {
	const [darkMode, toggleDarkMode] = useState(true)
	const toggle = () => toggleDarkMode(!darkMode)

	const [ref, entry] = useIntersectionObserver()

	const mode = darkMode ? "dark" : "light"

	return (
		<div ref={ref} onClick={toggle} className={`Card ${mode}`}>
			{children}
		</div>
	)
}

export default Card
