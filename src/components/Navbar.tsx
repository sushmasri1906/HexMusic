"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
	FiSearch,
	FiBell,
	FiUser,
	FiStar,
	FiDownload,
	FiMenu,
	FiX,
	FiSettings,
	FiLogOut,
} from "react-icons/fi";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicked outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as HTMLElement)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#2E0854] to-[#4B0082] shadow-md">
			<div className="flex items-center space-x-5 sm:space-x-1">
				<Link
					href="/"
					className="flex items-center text-2xl font-extrabold text-[#A259FF] tracking-wide hover:text-[#A259FF] transition">
					HexMusic
				</Link>
			</div>

			{/* Center: Search Bar (Visible on Small Screens Only) */}
			<div className="bg-black/50 text-white px-4 py-2 rounded-full flex items-center w-full sm:w-72 ml-2">
				<FiSearch className="text-gray-300 text-xl" />
				<input
					type="text"
					placeholder="Search for songs, artists..."
					className="ml-3 w-full bg-transparent outline-none placeholder-gray-400 text-lg"
				/>
			</div>

			{/* Right Section: Icons & Mobile Menu Button */}
			<div className="hidden lg:flex items-center space-x-6 text-white">
				{/* Show premium and install links only on medium screens and larger */}
				<Link
					href="/premium"
					className="hidden md:flex hover:text-[#A259FF] items-center gap-2 text-sm font-medium">
					<FiStar className="text-lg" /> <span>Premium</span>
				</Link>
				<Link
					href="/install"
					className="hidden md:flex hover:text-[#A259FF] items-center gap-2 text-sm font-medium">
					<FiDownload className="text-lg" /> <span>Install</span>
				</Link>

				{/* Profile Dropdown */}
				<div className="relative" ref={dropdownRef}>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-white hover:text-[#A259FF] transition">
						<FiUser className="text-2xl" />
					</button>

					{isOpen && (
						<div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden">
							<Link
								href="/profile"
								className="block px-4 py-2 hover:bg-[#4B0082] transition">
								Profile
							</Link>
							<Link
								href="/settings"
								className=" px-4 py-2 hover:bg-[#4B0082] transition flex items-center gap-2">
								<FiSettings /> Settings
							</Link>
							<button
								className="w-full text-left px-4 py-2 hover:bg-red-600 transition flex items-center gap-2"
								onClick={() => alert("Logging out...")}>
								<FiLogOut /> Logout
							</button>
						</div>
					)}
				</div>

				{/* Bell Icon */}
				<FiBell className="text-2xl cursor-pointer hover:text-[#A259FF] transition" />

				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden text-2xl"
					onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <FiX /> : <FiMenu />}
				</button>
			</div>

			{/* Mobile Menu - Fullscreen Overlay */}
			<div
				className={`fixed inset-0 bg-[#2E0854] bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-lg transition-transform duration-300 ${
					menuOpen ? "translate-y-0" : "-translate-y-full"
				}`}
				style={{ zIndex: 1000 }}>
				<Link
					href="/premium"
					className="hover:text-[#A259FF] text-xl"
					onClick={() => setMenuOpen(false)}>
					Premium
				</Link>
				<Link
					href="/install"
					className="hover:text-[#A259FF] text-xl"
					onClick={() => setMenuOpen(false)}>
					Install App
				</Link>
				<button
					onClick={() => setMenuOpen(false)}
					className="text-3xl mt-6 hover:text-red-400 transition">
					<FiX />
				</button>
			</div>
		</nav>
	);
}
