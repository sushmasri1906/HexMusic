"use client";

import { useState } from "react";
import {
	FaPlay,
	FaPause,
	FaStepBackward,
	FaStepForward,
	FaVolumeUp,
	FaVolumeDown,
	FaHeart,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/perfect.jpg";

export default function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(50);
	const [progress, setProgress] = useState(30); // Mock progress
	const [isLoved, setIsLoved] = useState(false);

	// Handle Progress Change
	const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProgress(Number(e.target.value));
	};

	// Handle Volume Change
	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setVolume(Number(e.target.value));
	};

	return (
		<div className="fixed bottom-0 left-0 w-full bg-[#181818] text-white py-3 px-4 border-t border-gray-700 flex flex-col items-center">
			{/* Progress Bar */}
			<div className="w-full md:w-[70%] flex items-center">
				<span className="text-xs text-gray-400">0:00</span>
				<input
					type="range"
					min="0"
					max="100"
					value={progress}
					onChange={handleProgressChange}
					className="w-full mx-2 h-[5px] cursor-pointer accent-[#A259FF]"
				/>
				<span className="text-xs text-gray-400">3:45</span>
			</div>

			{/* Main Player Controls */}
			<div className="flex flex-wrap justify-between w-full mt-2 items-center gap-2">
				{/* Track Info */}
				<div className="flex items-center space-x-3 flex-1 min-w-[120px]">
					<Image
						src={img}
						alt="Track Art"
						width={45}
						height={45}
						className="rounded-md"
					/>
					<div className="text-sm">
						<h3 className="font-semibold">Perfect</h3>
						<Link
							href="/artist/1"
							className="text-xs text-gray-400 hover:text-[#A259FF]">
							Ed Sheeran
						</Link>
					</div>
				</div>

				{/* Playback Controls */}
				<div className="flex items-center space-x-3 flex-1 justify-center min-w-[140px]">
					<button className="text-lg hover:text-[#A259FF]">
						<FaStepBackward />
					</button>
					<button
						className="text-lg p-2 rounded-full bg-[#A259FF] hover:bg-[#8A2BE2] transition"
						onClick={() => setIsPlaying(!isPlaying)}>
						{isPlaying ? <FaPause /> : <FaPlay />}
					</button>
					<button className="text-lg hover:text-[#A259FF]">
						<FaStepForward />
					</button>
				</div>

				{/* Volume & Love Control */}
				<div className="flex items-center space-x-3 flex-1 justify-end min-w-[140px]">
					<button
						className={`text-xl transition ${
							isLoved ? "text-red-500" : "text-gray-400"
						}`}
						onClick={() => setIsLoved(!isLoved)}>
						<FaHeart />
					</button>
					<FaVolumeDown className="text-lg text-gray-400" />
					<input
						type="range"
						min="0"
						max="100"
						value={volume}
						onChange={handleVolumeChange}
						className="w-[60px] md:w-[100px] cursor-pointer accent-[#A259FF]"
					/>
					<FaVolumeUp className="text-lg text-gray-400" />
				</div>
			</div>
		</div>
	);
}
