import React from "react"

const Container = ({ children, id }) => {
	return <section id={id} className="container">{children}</section>
}

export default Container