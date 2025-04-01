"use client";
import { useState } from "react";
import {
	FiUser,
	FiHeart,
	FiMusic,
	FiStar,
	FiLogOut,
	FiSettings,
} from "react-icons/fi";
import Link from "next/link";

export default function ProfileDropdown() {
	const [open, setOpen] = useState(false);

	return (
		<div className="relative">
			{/* Profile Icon */}
			<button
				className="text-2xl text-white hover:text-[#A259FF]"
				onClick={() => setOpen(!open)}>
				<FiUser />
			</button>

			{/* Dropdown Menu */}
			{open && (
				<div className="absolute right-0 mt-2 w-52 bg-[#2E0854] shadow-lg rounded-lg overflow-hidden text-white z-50">
					<Link
						href="/profile"
						className="flex items-center px-4 py-2 hover:bg-[#4B0082]"
						onClick={() => setOpen(false)}>
						<FiUser className="mr-2" /> View Profile
					</Link>
					<Link
						href="/playlists"
						className="flex items-center px-4 py-2 hover:bg-[#4B0082]"
						onClick={() => setOpen(false)}>
						<FiMusic className="mr-2" /> My Playlists
					</Link>
					<Link
						href="/liked"
						className="flex items-center px-4 py-2 hover:bg-[#4B0082]"
						onClick={() => setOpen(false)}>
						<FiHeart className="mr-2" /> Liked Songs
					</Link>
					<Link
						href="/premium"
						className="flex items-center px-4 py-2 hover:bg-[#4B0082]"
						onClick={() => setOpen(false)}>
						<FiStar className="mr-2" /> Subscription
					</Link>
					<Link
						href="/settings"
						className="flex items-center px-4 py-2 hover:bg-[#4B0082]"
						onClick={() => setOpen(false)}>
						<FiSettings className="mr-2" /> Settings
					</Link>
					<button
						className="flex items-center w-full text-left px-4 py-2 hover:bg-red-500"
						onClick={() => alert("Logged out")}>
						<FiLogOut className="mr-2" /> Logout
					</button>
				</div>
			)}
		</div>
	);
}
