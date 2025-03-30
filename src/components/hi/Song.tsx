"use client";
import { useTokenStore } from "@/store/tokenStore";
import { useEffect, useState } from "react";

const Song = ({ songId }: { songId: string }) => {
	const [songDetails, setSongDetails] = useState<any>(null);
	const token = useTokenStore((state) => state.token);

	useEffect(() => {
		const fetchSongDetails = async () => {
			if (!songId || !token) return;

			try {
				const response = await fetch(
					`https://api.spotify.com/v1/tracks/${songId}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				if (!response.ok) throw new Error("Failed to fetch song details");

				const data = await response.json();
				console.log(data, "Song Data");
				setSongDetails(data);
			} catch (error) {
				console.error("Error fetching song details:", error);
			}
		};

		fetchSongDetails();
	}, [songId, token]);

	return (
		<div className="p-6 bg-[#0f0f0f] rounded-lg shadow-lg text-white">
			{songDetails ? (
				<div className="text-center">
					<h2 className="text-xl font-bold">{songDetails.name}</h2>
					<p className="text-sm text-gray-400">
						{songDetails.artists.map((artist: any) => artist.name).join(", ")}
					</p>
					<img
						src={songDetails.album.images[0].url}
						alt={songDetails.name}
						className="mt-4 w-full h-auto object-cover rounded-lg"
					/>
					{songDetails.preview_url && (
						<audio controls className="mt-4 w-full">
							<source src={songDetails.preview_url} type="audio/mpeg" />
							Your browser does not support the audio element.
						</audio>
					)}
				</div>
			) : (
				<p className="text-gray-400">Loading song details...</p>
			)}
		</div>
	);
};

export default Song;
