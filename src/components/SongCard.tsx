"use client";
import Link from "next/link";
import Image from "next/image";

interface Song {
	cover: string;
	title: string;
	artist: string;
	id: string;
}

const SongCard = ({ song }: { song: Song }) => {
	return (
		<div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
			<Image src={song.cover} alt={song.title} className="w-full rounded-md" />
			<h3 className="text-lg font-semibold mt-2">{song.title}</h3>
			<p className="text-gray-500">{song.artist}</p>
			<Link
				href={`/track/${song.id}`}
				className="text-blue-500 hover:underline">
				View Details
			</Link>
		</div>
	);
};

export default SongCard;
