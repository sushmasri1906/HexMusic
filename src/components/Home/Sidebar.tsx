"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaBook, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

export default function Sidebar() {
	const [isMobile, setIsMobile] = useState(false);

	// Detect screen size changes
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1024);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="flex min-h-screen bg-[#0f0f0f] ">
			{/* Sidebar */}
			<aside
				className={`h-screen bg-gradient-to-b from-[#2E0854] to-[#4B0082] p-5 fixed left-0 top-0 flex flex-col justify-between transition-all duration-300 ${
					isMobile ? "w-16" : "w-60"
				}`}>
				<div className="space-y-6">
					{/* Logo - Always visible on large screens */}
					{!isMobile && (
						<h1 className="text-xl font-bold text-[#A259FF]">HexMusic</h1>
					)}

					{/* Navigation Links */}
					<nav className="space-y-4 mt-16">
						{[
							{ href: "/", icon: <FaHome />, label: "Home" },
							{ href: "/library", icon: <FaBook />, label: "Library" },
							{ href: "/search", icon: <FaSearch />, label: "Search" },
						].map(({ href, icon, label }) => (
							<Link
								key={href}
								href={href}
								className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
								<span className="text-2xl min-w-[2rem]">{icon}</span>
								{/* Show text only on larger screens */}
								{!isMobile && <span>{label}</span>}
							</Link>
						))}
					</nav>
				</div>

				{/* Bottom Section (Notifications & Profile) */}
				<div className="space-y-4">
					{[
						{
							href: "/notifications",
							icon: <FaBell />,
							label: "Notifications",
						},
						{ href: "/profile", icon: <FaUserCircle />, label: "Profile" },
					].map(({ href, icon, label }) => (
						<Link
							key={href}
							href={href}
							className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
							<span className="text-2xl min-w-[2rem]">{icon}</span>
							{/* Show text only on larger screens */}
							{!isMobile && <span>{label}</span>}
						</Link>
					))}
				</div>
			</aside>

			{/* Main Content Area */}
			{/* <main
				className={`p-6 transition-all duration-300 w-full ${
					isMobile ? "ml-16" : "ml-60"
				}`}>
				<h2 className="text-white text-2xl">Main Content Here</h2>
			</main> */}
		</div>
	);
}
