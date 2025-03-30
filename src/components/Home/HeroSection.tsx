"use client";

import { useEffect, useState } from "react";
import { useTokenStore } from "@/store/tokenStore";
import Image from "next/image";
import Link from "next/link";
import { useArtistStore } from "@/store/artistStore";

export default function HeroSection() {
	const { token } = useTokenStore(); // Get stored token from Zustand

	interface Artist {
		id: string;
		name: string;
		images: { url: string }[];
	}

	const [artists, setArtists] = useState<Artist[]>([]);
	const setArtistId = useArtistStore((state) => state.setArtistId); // Get setArtistId function from Zustand

	useEffect(() => {
		if (!token) return;
		const fetchArtists = async () => {
			if (!token) return; // Wait until token is available

			try {
				const response = await fetch(
					"https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const data = await response.json();
				setArtists(data.artists);
				console.log(artists);
			} catch (error) {
				console.error("Error fetching artists:", error);
			}
		};

		fetchArtists();
	}, [token]); // Fetch data when token updates

	return (
		<section className="text-white text-center py-20 bg-gradient-to-r from-[#2E0854] to-[#4B0082]">
			<h1 className="text-4xl font-bold">Top Trending Artists</h1>
			<div className="mt-6 flex flex-wrap justify-center gap-6">
				{artists.length > 0 &&
					artists.map((artist) => (
						<Link
							href={"artist/" + `${artist?.id}`}
							onClick={() => setArtistId(artist?.id)}
							key={artist?.id}
							className="w-40">
							<Image
								src={artist.images[0].url}
								alt={artist.id}
								width={150}
								height={150}
								className="rounded-full w-[150px] h-[150px] border-4 border-[#A259FF]"
							/>
							<p className="mt-2 text-lg font-semibold">{artist?.name}</p>
						</Link>
					))}
			</div>
		</section>
	);
}
