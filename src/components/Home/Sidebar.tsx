"use client";

import { useState } from "react";
import Link from "next/link";
import {
	FaHome,
	FaBook,
	FaSearch,
	FaBell,
	FaUserCircle,
	FaBars,
	FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="flex">
			{/* Sidebar */}
			<aside
				className={`${
					isOpen ? "w-60" : "w-16"
				} h-screen bg-gradient-to-b from-[#2E0854] to-[#4B0082] p-5 transition-all duration-300 fixed left-0 top-0 flex flex-col justify-between`}>
				<div>
					{/* Logo & Toggle Button */}
					<div className="flex items-center justify-between mb-8">
						<h1
							className={`text-xl font-bold text-[#A259FF] ${
								!isOpen && "hidden"
							}`}>
							HexMusic
						</h1>
						<button
							className="text-white text-2xl"
							onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <FaTimes /> : <FaBars />}
						</button>
					</div>

					{/* Navigation Links */}
					<nav className="space-y-6">
						<Link
							href="/"
							className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
							<FaHome className="text-2xl" />
							{isOpen && "Home"}
						</Link>
						<Link
							href="/library"
							className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
							<FaBook className="text-2xl" />
							{isOpen && "Library"}
						</Link>
						<Link
							href="/search"
							className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
							<FaSearch className="text-2xl" />
							{isOpen && "Search"}
						</Link>
					</nav>
				</div>

				{/* Bottom Section (Notifications & Profile) */}
				<div className="space-y-4">
					<Link
						href="/notifications"
						className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
						<FaBell className="text-2xl" />
						{isOpen && "Notifications"}
					</Link>
					<Link
						href="/profile"
						className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
						<FaUserCircle className="text-2xl" />
						{isOpen && "Profile"}
					</Link>
				</div>
			</aside>

			{/* Main Content Area */}
			<div className={`ml-${isOpen ? "60" : "16"} p-6 w-full`}>
				<h2 className="text-white text-2xl">Main Content Here</h2>
			</div>
		</div>
	);
}
