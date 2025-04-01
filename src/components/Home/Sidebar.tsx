"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaList, FaHeart, FaHeadphones, FaCog, FaBars } from "react-icons/fa";

export default function Sidebar() {
	const [isMobile, setIsMobile] = useState(false);
	const [isExpanded, setIsExpanded] = useState(true);

	// Detect screen size changes
	useEffect(() => {
		const handleResize = () => {
			const mobileView = window.innerWidth < 1024;
			setIsMobile(mobileView);
			if (mobileView) setIsExpanded(false);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="flex min-h-screen bg-[#0f0f0f] pb-[90px]">
			{/* Sidebar */}
			<aside
				className={`h-[calc(100vh-90px)] bg-gradient-to-b from-[#2E0854] to-[#4B0082] p-5 fixed left-0 top-0 flex flex-col justify-between transition-all duration-300 ${
					isExpanded ? "w-60" : "w-16"
				}`}>
				<div className="space-y-6">
					{/* Sidebar Toggle Button */}
					<button
						className="text-white text-2xl mb-4 focus:outline-none"
						onClick={() => setIsExpanded(!isExpanded)}>
						<FaBars />
					</button>

					<nav className="space-y-4 mt-10">
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
								{isExpanded && <span>{label}</span>}
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
						{isExpanded && <span>Settings</span>}
					</Link>
				</div>
			</aside>
		</div>
	);
}
