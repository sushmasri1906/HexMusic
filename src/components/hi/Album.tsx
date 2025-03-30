"use client";
import { useTokenStore } from "@/store/tokenStore";
import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const Album = ({ albumId }: { albumId: string }) => {
	interface Track {
		id: string;
		name: string;
		uri: string;
		duration_ms: number;
		artists: { name: string }[];
	}

	const [tracks, setTracks] = useState<Track[]>([]);
	const [playingTrack, setPlayingTrack] = useState<string | null>(null);
	const [trackProgress, setTrackProgress] = useState<{ [key: string]: number }>(
		{}
	);
	const [trackDurations, setTrackDurations] = useState<{
		[key: string]: number;
	}>({});
	const token = useTokenStore((state) => state.token);

	useEffect(() => {
		const fetchAlbum = async () => {
			if (!albumId || !token) return;
			try {
				const response = await fetch(
					`https://api.spotify.com/v1/albums/${albumId}/tracks`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);
				const data = await response.json();
				setTracks(data.items);

				const durations: { [key: string]: number } = {};
				data.items.forEach((track: Track) => {
					durations[track.uri] = track.duration_ms / 1000;
				});
				setTrackDurations(durations);
			} catch (error) {
				console.error("Error fetching album:", error);
			}
		};
		fetchAlbum();
	}, [albumId, token]);

	const togglePlayPause = (track: Track) => {
		if (playingTrack === track.uri) {
			setPlayingTrack(null);
			setTrackProgress((prev) => ({ ...prev, [track.uri]: 0 }));
		} else {
			setPlayingTrack(track.uri);
			setTrackProgress((prev) => ({ ...prev, [track.uri]: 0 }));
		}
	};

	useEffect(() => {
		if (playingTrack) {
			const interval = setInterval(() => {
				setTrackProgress((prev) => {
					const currentProgress = prev[playingTrack] || 0;
					const duration = trackDurations[playingTrack] || 0;
					if (currentProgress >= duration) return prev;
					return { ...prev, [playingTrack]: currentProgress + 1 };
				});
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [playingTrack, trackDurations]);

	const formatTime = (seconds: number) => {
		const min = Math.floor(seconds / 60);
		const sec = Math.floor(seconds % 60);
		return `${min}:${sec < 10 ? "0" : ""}${sec}`;
	};

	return (
		<div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-[#121212] min-h-screen text-white mt-12">
			<h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
				Album Tracks
			</h2>
			<div className="space-y-2 sm:space-y-3">
				{tracks.length > 0 ? (
					tracks.map((track, index) => (
						<div
							key={track.id}
							className={`relative p-2 sm:p-3 md:p-4 rounded-lg transition cursor-pointer flex items-center gap-2 sm:gap-3 md:gap-4 ${
								playingTrack === track.uri
									? "bg-[#8A2BE2] shadow-lg scale-105 ring-2 ring-[#b076f4]"
									: "bg-[#181818] hover:bg-[#282828]"
							}`}>
							{playingTrack === track.uri && (
								<div
									className="absolute bottom-0 left-0 h-1 bg-[#00FF00] transition-all"
									style={{
										width: `${
											(trackProgress[track.uri] / trackDurations[track.uri]) *
											100
										}%`,
									}}></div>
							)}
							<p className="w-5 sm:w-6 text-gray-400 text-sm sm:text-lg">
								{playingTrack === track.uri ? "🔊" : index + 1}
							</p>
							<button onClick={() => togglePlayPause(track)}>
								{playingTrack === track.uri ? (
									<FaPause className="text-white text-lg" />
								) : (
									<FaPlay className="text-gray-400 text-lg hover:text-white" />
								)}
							</button>
							<div className="flex-1">
								<p
									className={`text-sm sm:text-base truncate ${
										playingTrack === track.uri ? "text-white" : "text-gray-300"
									}`}>
									{track.name}
								</p>
								<p className="text-xs text-gray-400">
									{track.artists.map((a) => a.name).join(", ")}
								</p>
							</div>
							<p className="text-xs sm:text-sm text-gray-400">
								{formatTime(trackProgress[track.uri] || 0)} /{" "}
								{formatTime(trackDurations[track.uri] || 0)}
							</p>
						</div>
					))
				) : (
					<p className="text-gray-400">Loading tracks...</p>
				)}
			</div>
		</div>
	);
};

export default Album;
