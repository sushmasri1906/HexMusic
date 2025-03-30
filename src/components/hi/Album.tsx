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

				// Set initial durations
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

	// Simulate track progress per track
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
		<div className="p-4 md:p-6 lg:p-8 bg-[#121212] min-h-screen text-white mt-12">
			<h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
				Album Tracks
			</h2>

			{/* Track List */}
			<div className="space-y-3">
				{tracks.length > 0 ? (
					tracks.map((track, index) => (
						<div
							key={track.id}
							className={`relative p-3 md:p-4 rounded-lg transition duration-300 cursor-pointer group flex items-center ${
								playingTrack === track.uri
									? "bg-[#8A2BE2] shadow-lg scale-[1.02] ring-2 ring-[#b076f4]"
									: "bg-[#181818] hover:bg-[#282828]"
							}`}>
							{/* Progress Bar */}
							{playingTrack === track.uri && (
								<div
									className="absolute bottom-0 left-0 h-1 bg-[#00FF00] transition-all duration-1000 ease-linear"
									style={{
										width: `${
											(trackProgress[track.uri] / trackDurations[track.uri]) *
											100
										}%`,
									}}></div>
							)}

							{/* Track Number or Playing Indicator */}
							<p className="w-6 md:w-8 text-gray-400 group-hover:text-white text-lg md:text-xl font-semibold">
								{playingTrack === track.uri ? "🔊" : index + 1}
							</p>

							{/* Play/Pause Button */}
							<button
								className="opacity-100 transition duration-300 mx-2 md:mx-3"
								onClick={() => togglePlayPause(track)}>
								{playingTrack === track.uri ? (
									<FaPause className="text-white text-xl md:text-2xl" />
								) : (
									<FaPlay className="text-gray-400 text-xl md:text-2xl hover:text-white transition" />
								)}
							</button>

							{/* Track Info */}
							<div className="flex-1">
								<p
									className={`text-base md:text-lg font-medium truncate ${
										playingTrack === track.uri ? "text-white" : "text-gray-300"
									}`}>
									{track.name}
								</p>
								<p className="text-xs md:text-sm text-gray-400">
									{track.artists.map((a) => a.name).join(", ")}
								</p>
							</div>

							{/* Track Progress Timer */}
							<p
								className={`text-xs md:text-sm ${
									playingTrack === track.uri ? "text-white" : "text-gray-400"
								}`}>
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
