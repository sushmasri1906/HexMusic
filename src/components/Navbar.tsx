"use client";

import Link from "next/link";
import { useState } from "react";
import {
	FaSearch,
	FaHome,
	FaBell,
	FaUserCircle,
	FaCrown,
	FaDownload,
	FaBars,
	FaTimes,
} from "react-icons/fa";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#2E0854] to-[#4B0082] shadow-md">
			{/* Left Section: Logo & Home */}
			<div className="flex items-center space-x-5">
				<div className="text-2xl font-extrabold text-[#A259FF] tracking-wide">HexMusic</div>
				<Link href="/" className="text-white hover:text-[#A259FF] transition">
					<FaHome className="text-2xl" />
				</Link>
			</div>

			{/* Center: Search Bar (Hidden on Small Screens) */}
			<div className="hidden lg:flex bg-black/40 text-white px-5 py-2 rounded-full items-center w-72">
				<FaSearch className="text-gray-300" />
				<input
					type="text"
					placeholder="Search for songs, artists..."
					className="ml-3 w-full bg-transparent outline-none placeholder-gray-400"
				/>
			</div>

			{/* Right Section: Icons & Mobile Menu Button */}
			<div className="flex items-center space-x-6 text-white">
				<Link href="/premium" className="hidden md:flex hover:text-[#A259FF] items-center gap-2 text-sm font-medium">
					<FaCrown className="text-lg" /> <span>Premium</span>
				</Link>
				<Link href="/install" className="hidden md:flex hover:text-[#A259FF] items-center gap-2 text-sm font-medium">
					<FaDownload className="text-lg" /> <span>Install</span>
				</Link>
				<FaBell className="text-2xl cursor-pointer hover:text-[#A259FF] transition" />
				<FaUserCircle className="text-2xl cursor-pointer hover:text-[#A259FF] transition" />

				{/* Mobile Menu Toggle */}
				<button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Mobile Menu - Fullscreen Overlay */}
			<div
				className={`fixed inset-0 bg-[#2E0854] bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-lg transition-transform duration-300 ${
					menuOpen ? "translate-y-0" : "-translate-y-full"
				}`}
				style={{ zIndex: 1000 }}
			>
				<Link href="/" className="hover:text-[#A259FF] text-xl" onClick={() => setMenuOpen(false)}>
					Home
				</Link>
				<Link href="/premium" className="hover:text-[#A259FF] text-xl" onClick={() => setMenuOpen(false)}>
					Premium
				</Link>
				<Link href="/install" className="hover:text-[#A259FF] text-xl" onClick={() => setMenuOpen(false)}>
					Install App
				</Link>
				<button onClick={() => setMenuOpen(false)} className="text-3xl mt-6 hover:text-red-400 transition">
					<FaTimes />
				</button>
			</div>
		</nav>
	);
}
