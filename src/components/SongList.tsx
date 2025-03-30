"use client";
import SongCard from "./SongCard";

interface Song {
	id: string;
	cover: string;
	title: string;
	artist: string;
}

const SongList: React.FC<{ songs: Song[] }> = ({ songs }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
			{songs.map((song) => (
				<SongCard key={song.id} song={song} />
			))}
		</div>
	);
};

export default SongList;
