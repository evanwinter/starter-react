import React, { useState, useRef, useEffect } from "react"
import { useGeniusLyrics } from "./useGeniusLyrics"
import levenshtein from "js-levenshtein"

const proxy = "https://cors-anywhere.herokuapp.com/"
const geniusURL = "https://genius.com/"
const songPath = "Barack-obama-2012-presidential-acceptance-speech-annotated"
const url = proxy + geniusURL + songPath

const Search = () => {
	// On render, fetch data
	const data = useGeniusLyrics(url)

	// Handle input
	const [query, setQuery] = useState("")
	const inputRef = useRef()
	const handleChange = () => setQuery(inputRef.current.value)

	// Update search results when input changes
	const [results, setResults] = useState(undefined)
	useEffect(() => {
		// If nothing entered, show no results
		if (query === "") {
			setResults(undefined)
			return
		}

		// Get matching results (naive)
		const matching =
			data &&
			data.filter((result) => {
				if (result.indexOf(query) > -1) return result
			})

		// Sort by closest match to the query (levenshtein distance) (not fuzzy)
		const sorted =
			matching &&
			matching.sort((a, b) => {
				return levenshtein(a, query) - levenshtein(b, query)
			})

		setResults(sorted)
	}, [query])

	useEffect(() => {
		inputRef.current.focus()
	})

	return (
		<div className="Search">
			<form onChange={handleChange}>
				<label htmlFor="query">Look up a word:</label>
				<input autoComplete="off" disabled={!data} id="query" ref={inputRef} type="text" />
			</form>
			<section id="results" className={results ? "" : "hidden"}>
				<ul>{results && results.map((result, index) => <li key={index}>{result}</li>)}</ul>
			</section>
		</div>
	)
}
export default Search
