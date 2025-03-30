"use client";
import { useTokenStore } from "@/store/tokenStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ArtistAlbums({ id }: { id: string }) {
	interface Album {
		id: string;
		name: string;
		images: { url: string; height: number; width: number }[];
	}

	const [albums, setAlbums] = useState<Album[]>([]);
	const token = useTokenStore((state) => state.token);
	useEffect(() => {
		const fetchAlbums = async () => {
			if (!id) return;
			try {
				const response = await fetch(
					`https://api.spotify.com/v1/artists/${id}/albums`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const data = await response.json();
				console.log(data, "Album Data");
				setAlbums(data.items);
			} catch (error) {
				console.error("Error fetching albums:", error);
			}
		};
		fetchAlbums();
	}, []);
	return (
		
		<div className="grid grid-cols-2 bg-[#0f0f0f] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 mx-auto">
			
			{albums.length > 0 &&
				albums.map((album) => (
					<Link
						href={`/artist/${id}/${album.id}`}
						key={album.id}
						className="group relative p-4  mt-7  border-2  transition-all duration-300 border-[#791abe] shadow-lg  hover:shadow-2xl hover:border-[#A259FF]">
						{album.images[0].url && (
							<Image
								src={album.images[0].url}
								alt={album.name}
								height={album.images[0].height}
								width={album.images[0].width}
								className=" w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						)}
						<p className="mt-3 text-white text-lg font-semibold text-center truncate">
							{album.name}
						</p>
					</Link>
				))}
		</div>
	);
}
