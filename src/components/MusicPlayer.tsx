"use client";

import { useState } from "react";
import {
	FaPlay,
	FaPause,
	FaStepBackward,
	FaStepForward,
	FaVolumeUp,
	FaVolumeDown,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/perfect.jpg";

export default function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(50);

	return (
		<div className="fixed bottom-0 left-0 w-full bg-[#181818] text-white py-4 px-4 border-t border-gray-700 flex flex-col md:flex-row md:items-center justify-between">
			{/* Track Info */}
			<div className="flex items-center space-x-3 mb-3 md:mb-0">
				<Image
					src={img}
					alt="Track Art"
					width={48}
					height={48}
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
			<div className="flex items-center space-x-5">
				<button className="text-lg hover:text-[#A259FF]">
					<FaStepBackward />
				</button>
				<button
					className="text-2xl p-2 rounded-full bg-[#A259FF] hover:bg-[#8A2BE2] transition"
					onClick={() => setIsPlaying(!isPlaying)}>
					{isPlaying ? <FaPause /> : <FaPlay />}
				</button>
				<button className="text-lg hover:text-[#A259FF]">
					<FaStepForward />
				</button>
			</div>

			{/* Volume Control - Always Visible */}
			<div className="flex items-center space-x-2 mt-3 md:mt-0">
				<FaVolumeDown className="text-lg text-gray-400" />
				<input
					type="range"
					min="0"
					max="100"
					value={volume}
					onChange={(e) => setVolume(Number(e.target.value))}
					className="w-16 sm:w-24 md:w-32 cursor-pointer"
				/>
				<FaVolumeUp className="text-lg text-gray-400" />
			</div>
		</div>
	);
}
