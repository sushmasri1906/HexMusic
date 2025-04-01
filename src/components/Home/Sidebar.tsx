"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaList, FaHeart, FaHeadphones, FaCog, FaBars } from "react-icons/fa";

export default function Sidebar() {
	const [isMobile, setIsMobile] = useState(false);
	const [isExpanded, setIsExpanded] = useState(true);
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	// Detect screen size changes
	useEffect(() => {
		const handleResize = () => {
			const mobileView = window.innerWidth < 1024;
			setIsMobile(mobileView);

			// Expand sidebar when switching to large screens
			if (!mobileView) {
				setIsExpanded(true);
			} else {
				setIsExpanded(false); // Collapse on mobile
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Sidebar toggle function
	const toggleSidebar = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="flex min-h-screen bg-[#0f0f0f] pb-[90px]">
			{/* Sidebar */}
			<aside
				className={`h-[calc(100vh-90px)] bg-gradient-to-b from-[#2E0854] to-[#4B0082] p-5 fixed left-0 top-0 flex flex-col justify-between transition-all duration-300 ease-in-out ${
					isExpanded ? "w-60" : "w-16"
				}`}>
				<div className="space-y-6">
					{/* Sidebar Toggle Button */}
					<button
						className="text-white text-2xl mb-4 focus:outline-none"
						onClick={toggleSidebar}>
						<FaBars />
					</button>

					{/* Sidebar Navigation */}
					<nav className="space-y-4 mt-4">
						{[
							{ href: "/playlist", icon: <FaList />, label: "Playlists" },
							{ href: "/favorites", icon: <FaHeart />, label: "Favorites" },
							{ href: "/genres", icon: <FaHeadphones />, label: "Genres" },
						].map(({ href, icon, label }) => (
							<Link
								key={href}
								href={href}
								className={`flex items-center gap-4 text-white hover:text-[#A259FF] transition px-2 py-2 rounded-md ${
									isExpanded ? "w-full" : "w-16 hover:w-48"
								}`}
								onMouseEnter={() => setHoveredItem(label)}
								onMouseLeave={() => setHoveredItem(null)}>
								{/* Icon */}
								<span className="text-2xl min-w-[2rem]">{icon}</span>

								{/* Show label if expanded OR on hover (only for small screens) */}
								{(isExpanded || hoveredItem === label) && (
									<span
										className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
											isExpanded ? "opacity-100 w-auto" : "opacity-100 w-32"
										}`}>
										{label}
									</span>
								)}
							</Link>
						))}
					</nav>
				</div>

				{/* Sidebar Bottom Section */}
				<div className="space-y-4">
					<Link
						href="/settings"
						className={`flex items-center gap-4 text-white hover:text-[#A259FF] transition px-2 py-2 rounded-md ${
							isExpanded ? "w-full" : "w-16 hover:w-48"
						}`}
						onMouseEnter={() => setHoveredItem("Settings")}
						onMouseLeave={() => setHoveredItem(null)}>
						{/* Icon */}
						<span className="text-2xl min-w-[2rem]">
							<FaCog />
						</span>

						{/* Show label on hover (only for small screens) */}
						{(isExpanded || hoveredItem === "Settings") && (
							<span
								className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
									isExpanded ? "opacity-100 w-auto" : "opacity-100 w-32"
								}`}>
								Settings
							</span>
						)}
					</Link>
				</div>
			</aside>

			{/* Sidebar Overlay on Mobile */}
			{isMobile && isExpanded && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
					onClick={toggleSidebar}></div>
			)}
		</div>
	);
}
