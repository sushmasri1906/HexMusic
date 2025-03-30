"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaList, FaHeart, FaHeadphones, FaCog } from "react-icons/fa";

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
		<div className="flex min-h-screen bg-[#0f0f0f]">
			{/* Sidebar */}
			<aside
				className={`h-screen bg-gradient-to-b from-[#2E0854] to-[#4B0082] p-5 fixed left-0 top-0 flex flex-col justify-between transition-all duration-300 ${
					isMobile ? "w-16" : "w-60 h-screen"
				}`}>
				<div className="space-y-6">
					{/* Sidebar Logo */}
					{!isMobile && (
						<h1 className="text-xl font-bold text-[#A259FF]">HexSidebar</h1>
					)}

					{/* Sidebar Navigation Links */}
					<nav className="space-y-4 mt-16">
						{[
							{ href: "/playlist", icon: <FaList />, label: "Playlists" },
							{ href: "/favorites", icon: <FaHeart />, label: "Favorites" },
							{ href: "/genres", icon: <FaHeadphones />, label: "Genres" },
						].map(({ href, icon, label }) => (
							<Link
								key={href}
								href={href}
								className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
								<span className="text-2xl min-w-[2rem]">{icon}</span>
								{!isMobile && <span>{label}</span>}
							</Link>
						))}
					</nav>
				</div>

				{/* Sidebar Bottom Section */}
				<div className="space-y-4">
					<Link
						href="/settings"
						className="flex items-center gap-4 text-white hover:text-[#A259FF] transition">
						<span className="text-2xl min-w-[2rem]">
							<FaCog />
						</span>
						{!isMobile && <span>Settings</span>}
					</Link>
				</div>
			</aside>
		</div>
	);
}
