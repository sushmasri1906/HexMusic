"use client";

import { useState } from "react";
import { useTokenStore } from "@/store/tokenStore"; // Zustand store for token

const SearchArtist = () => {
	const [artistId, setArtistId] = useState<string | null>(null);
	const [artistName, setArtistName] = useState<string>("");
	const { token } = useTokenStore();

	const handleSearch = async () => {
		if (!token || !artistName) return;

		try {
			const response = await fetch(
				`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const data = await response.json();
			const artist = data.artists.items[0]; // Get the first artist result
			if (artist) {
				setArtistId(artist.id); // Set the artist's ID
			} else {
				console.log("Artist not found.");
			}
		} catch (error) {
			console.error("Error searching for artist:", error);
		}
	};

	return (
		<div>
			<input
				type="text"
				value={artistName}
				onChange={(e) => setArtistName(e.target.value)}
				placeholder="Search for an artist"
			/>
			<button onClick={handleSearch}>Search</button>

			{/* {artistId && <ArtistAlbums artistId={artistId} />} */}
		</div>
	);
};
