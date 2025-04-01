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
	const [notifOpen, setNotifOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const notifRef = useRef<HTMLDivElement>(null);

	// Close dropdowns when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as HTMLElement)
			) {
				setIsOpen(false);
			}
			if (
				notifRef.current &&
				!notifRef.current.contains(event.target as HTMLElement)
			) {
				setNotifOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const notifications = [
		{ id: 1, message: "New song added to your playlist!", time: "2m ago" },
		{
			id: 2,
			message: "Your favorite artist released a new album!",
			time: "10m ago",
		},
		{ id: 3, message: "Upcoming live session in 1 hour!", time: "1h ago" },
	];

	return (
		<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#2E0854] to-[#4B0082] shadow-md">
			{/* Logo and Links */}
			<div className="flex items-center space-x-5 sm:space-x-1">
				<Link
					href="/"
					className="flex items-center text-2xl font-extrabold text-[#A259FF] tracking-wide hover:text-[#A259FF] transition">
					HexMusic
				</Link>
			</div>

			{/* Search Bar */}
			<div className="bg-black/50 text-white px-4 py-2 rounded-full flex items-center w-full sm:w-72 mx-2">
				<FiSearch className="text-gray-300 text-xl" />
				<input
					type="text"
					placeholder="Search for songs,artists..."
					className="ml-2 w-full bg-transparent outline-none placeholder-gray-400 text-sm"
				/>
			</div>

			{/* Right Section: Icons & Menu */}
			<div className="hidden lg:flex items-center space-x-6 text-white">
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
								className="px-4 py-2 hover:bg-[#4B0082] transition flex items-center gap-2">
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

				{/* Notifications Dropdown */}
				<div className="relative " ref={notifRef}>
					<button
						onClick={() => setNotifOpen(!notifOpen)}
						className="text-white hover:text-[#A259FF] transition">
						<FiBell className="text-2xl" />
					</button>

					{notifOpen && (
						<div className="absolute right-0 mt-2 w-64 bg-[#1a1a1a] shadow-lg rounded-lg border border-gray-700 p-3 z-50">
							<h3 className="text-white font-bold text-sm mb-2">
								Notifications
							</h3>

							{/* Notification List */}
							<div className="space-y-2">
								{notifications.length > 0 ? (
									notifications.map((notif) => (
										<div
											key={notif.id}
											className="flex justify-between items-center bg-[#2E0854] p-2 rounded-lg hover:bg-[#4B0082] transition">
											<span className="text-white text-sm">
												{notif.message}
											</span>
											<span className="text-xs text-gray-400">
												{notif.time}
											</span>
										</div>
									))
								) : (
									<p className="text-gray-400 text-sm text-center">
										No new notifications
									</p>
								)}
							</div>

							{/* Footer Buttons */}
							<div className="flex justify-between mt-3 text-xs text-gray-400">
								<button className="hover:text-white transition">
									Clear all
								</button>
								<button className="hover:text-white transition">
									Mark all as read
								</button>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Mobile Menu Toggle */}
			<button
				className="lg:hidden text-2xl text-white"
				onClick={() => setMenuOpen(!menuOpen)}>
				{menuOpen ? <FiX /> : <FiMenu />}
			</button>

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

				{/* Profile and Notifications for Mobile */}
				<div className="flex flex-col items-center space-y-4">
					{/* Profile Dropdown */}
					<div className="relative w-full">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-white hover:text-[#A259FF] transition w-full text-left flex items-center justify-center py-2 px-4">
							<FiUser className="text-2xl" />
							<span className="ml-1">Profile</span>
						</button>

						{isOpen && (
							<div className="absolute right-0 mt-2 w-full bg-white text-black shadow-lg rounded-md overflow-hidden">
								<Link
									href="/profile"
									className="block px-4 py-2 hover:bg-[#4B0082] transition">
									Profile
								</Link>
								<Link
									href="/settings"
									className="px-4 py-2 hover:bg-[#4B0082] transition flex items-center gap-2">
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

					{/* Notifications Dropdown */}
					<div className="relative w-full">
						<button
							onClick={() => setNotifOpen(!notifOpen)}
							className="text-white hover:text-[#A259FF] transition w-full text-left flex items-center justify-between py-2 px-4">
							<FiBell className="text-2xl" />
							<span className="ml-3">Notifications</span>
						</button>

						{notifOpen && (
							<div className="absolute right-0 mt-2 w-full bg-[#1a1a1a] shadow-lg rounded-lg border border-gray-700 p-3 z-50">
								<h3 className="text-white font-bold text-sm mb-2">
									Notifications
								</h3>

								{/* Notification List */}
								<div className="space-y-2">
									{notifications.length > 0 ? (
										notifications.map((notif) => (
											<div
												key={notif.id}
												className="flex justify-between items-center bg-[#2E0854] p-2 rounded-lg hover:bg-[#4B0082] transition">
												<span className="text-white text-sm">
													{notif.message}
												</span>
												<span className="text-xs text-gray-400">
													{notif.time}
												</span>
											</div>
										))
									) : (
										<p className="text-gray-400 text-sm text-center">
											No new notifications
										</p>
									)}
								</div>

								{/* Footer Buttons */}
								<div className="flex justify-between mt-3 text-xs text-gray-400">
									<button className="hover:text-white transition">
										Clear all
									</button>
									<button className="hover:text-white transition">
										Mark all as read
									</button>
								</div>
							</div>
						)}
					</div>
				</div>

				<button
					onClick={() => setMenuOpen(false)}
					className="text-3xl mt-6 hover:text-red-400 transition">
					<FiX />
				</button>
			</div>
		</nav>
	);
}
