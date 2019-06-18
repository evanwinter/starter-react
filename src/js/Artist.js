import React, { useState, useRef, useEffect } from "react"

const token = process.env.GENIUS_API_TOKEN
const proxy = "https://cors-anywhere.herokuapp.com/"
const base = proxy + "https://genius.com/"
const api = proxy + "https://api.genius.com/"
const searchEndpoint = "search?q="
const apiSearch = api + searchEndpoint

const Artist = () => {
	const inputRef = useRef()
	const [recommendedArtists, setRecommendedArtists] = useState(undefined)
	const [selectedArtist, setSelectedArtist] = useState(undefined)

	const handleArtistSearch = async (e) => {
		e.preventDefault()
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
		const recommendedArtists = songs.map((song) => song.result.primary_artist)
		const uniqueArtists = recommendedArtists.reduce((acc, curr) => {
			if (!acc[curr.id]) acc[curr.id] = curr
			return acc
		}, [])

		setRecommendedArtists(uniqueArtists)
	}

	const selectArtist = (e) => {
		const id = e.currentTarget.dataset.artistId
		const [matchingArtist] = recommendedArtists.filter((artist) => artist.id == id)
		setSelectedArtist(matchingArtist)
	}

	useEffect(() => {
		if (!selectedArtist) return
		console.log(selectedArtist)
	}, [selectedArtist])

	return (
		<div className="Artist">
			<div className="ArtistSearch">
				<form onSubmit={handleArtistSearch}>
					<label htmlFor="query">Search:</label>
					<input autoComplete="off" id="query" ref={inputRef} type="text" />
				</form>
			</div>
			{!selectedArtist && (
				<div className="RecommendedArtists">
					{recommendedArtists &&
						recommendedArtists.map((artist) => {
							return (
								<div
									onClick={selectArtist}
									data-artist-id={artist.id}
									key={artist.id}
									className="RecommendedArtist"
								>
									<span className="ArtistName">{artist.name}</span>
								</div>
							)
						})}
				</div>
			)}
		</div>
	)
}
export default Artist
