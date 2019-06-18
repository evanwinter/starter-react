import React, { useState, useRef, useEffect } from "react"

const token = process.env.GENIUS_API_TOKEN
const proxy = "https://cors-anywhere.herokuapp.com/"
const base = proxy + "https://genius.com/"
const api = proxy + "https://api.genius.com/"
const searchEndpoint = "search?q="
const apiSearch = api + searchEndpoint

const Artist = () => {
	const [recommendedArtists, setRecommendedArtists] = useState(undefined)
	const [artist, setArtist] = useState(undefined)
	const inputRef = useRef()

	const getBio = async artist => {
		const url = base + artist.url
		const response = await fetch(url)
		const text = await response.text()
		const html = new DOMParser().parseFromString(text, "text/html")
		const scrapedBio = html.querySelector("div.rich_text_formatting")
		const scrapedParagraphs = scrapedBio
			? [...scrapedBio.querySelectorAll("p")]
			: null
		const paragraphs = scrapedParagraphs.map(
			paragraph => paragraph.innerHTML
		)
		return paragraphs
	}

	const handleArtistSearch = async (e) => {
		e.preventDefault()

		// Get matching artists for query
		const query = inputRef.current.value
		const url = apiSearch + query
		const request = new Request(url, {
			method: "GET",
			headers: new Headers({ Authorization: `Bearer ${token}` })
		})
		const response = await fetch(request)
		if (!response.ok) throw new Error(`Error getting artists for query: ${query}`)
		const json = await response.json()
		const songs = json.response.hits
		const recommendedArtists = songs.map(song => song.result.primary_artist)
		const uniqueArtists = recommendedArtists.reduce((acc, curr) => {
			if (!acc[curr.id]) acc[curr.id] = curr
			return acc
		}, [])

		setRecommendedArtists(uniqueArtists)
	}

	const selectArtist = (e) => {
		const id = e.currentTarget.dataset.artistId
		const matchingArtist = recommendedArtists.filter(artist => artist.id == id)
		setArtist(matchingArtist)
	}

	useEffect(() => {
		if (artist)
			console.log("Artist changed")
	}, [artist])

	return (
		<div className="Artist">
			<div className="ArtistSearch">
				<form onSubmit={handleArtistSearch}>
					<label htmlFor="query">Search:</label>
					<input autoComplete="off" id="query" ref={inputRef} type="text" />
				</form>
			</div>
			<div className="RecommendedArtists">
				{recommendedArtists && recommendedArtists.map((artist) => {
				 	return (
				 		<div onClick={selectArtist} data-artist-id={artist.id} key={artist.id} className="RecommendedArtist">
				 			<span className="ArtistName">{artist.name}</span>
				 		</div>
				 	)
				 })}
			</div>
		</div>
	)
}
export default Artist