"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaHome, FaBook, FaUserCircle, FaBars, FaBell } from "react-icons/fa";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#2E0854] to-[#4B0082] shadow-lg">
			{/* Logo */}
			<div className="text-xl font-bold text-[#A259FF]">HexMusic</div>

			{/* Desktop Links */}
			<div className="hidden md:flex text-white space-x-6">
				<Link href="/" className="hover:text-[#A259FF] flex items-center gap-2">
					<FaHome /> Home
				</Link>
				<Link
					href="/library"
					className="hover:text-[#A259FF] flex items-center gap-2">
					<FaBook /> Library
				</Link>
			</div>

			{/* Search Bar */}
			<div className="hidden md:flex bg-black/30 text-white px-4 py-2 rounded-full items-center w-64">
				<FaSearch className="text-gray-300" />
				<input
					type="text"
					placeholder="What do you want to play?"
					className="ml-2 w-full outline-none border-none bg-transparent placeholder-gray-400"
				/>
			</div>

			{/* User, Notification & Mobile Menu */}
			<div className="flex items-center space-x-4">
				<FaBell className="text-2xl cursor-pointer text-gray-300 hover:text-white transition" />
				<FaUserCircle className="text-2xl cursor-pointer text-gray-300 hover:text-white transition" />
				<FaBars
					className="md:hidden text-2xl cursor-pointer"
					onClick={() => setMenuOpen(!menuOpen)}
				/>
			</div>

			{/* Mobile Menu */}
			<div
				className={`absolute top-16 left-0 w-full bg-[#2E0854] p-4 md:hidden flex flex-col space-y-4 text-center transition-transform duration-300 ${
					menuOpen ? "translate-y-0" : "-translate-y-full"
				}`}>
				<Link
					href="/"
					className="hover:text-[#A259FF]"
					onClick={() => setMenuOpen(false)}>
					Home
				</Link>
				<Link
					href="/library"
					className="hover:text-[#A259FF]"
					onClick={() => setMenuOpen(false)}>
					Library
				</Link>
			</div>
		</nav>
	);
}
