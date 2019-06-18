import React, { useEffect, useState } from "react"

/*
	A custom Hook that scrapes lyrics from Genius.com for a given song page URL
*/
export function useGeniusLyrics(url) {
	const [data, setData] = useState(null)

	const fetchData = async (url) => {
		// Fetch the page data and handle errors
		const response = await fetch(url)
		if (!response.ok) throw new Error(`Error fetching data from ${url}.`)

		// Extract the page text
		const text = await response.text()

		// Parse text into HTML
		const html = new DOMParser().parseFromString(text, "text/html")

		// Query the DOM for lyrics
		const lyrics = html.querySelector("div.lyrics").innerText

		// Format lyrics - strip punctuation, make lowercase, tokenize, remove dupes, etc
		const formatted = lyrics
			.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, "") // strip punctuation
			.replace(/[\r\n]/g, " ") // make newlines into spaces
			.toLowerCase() // make all lowercase
			.split(" ") // split into array of strings
			.filter((w) => w !== "") // filter out empty strings
			.filter((value, index, self) => self.indexOf(value) === index) // filter out duplicates

		// Store formatted lyrics in state
		setData(formatted)
	}

	// Make the call to fetch data on initial render
	useEffect(() => {
		fetchData(url)
	}, [])

	// Return latest data
	return data
}
