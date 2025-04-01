"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
	FaList,
	FaHeart,
	FaHeadphones,
	FaCog,
	FaBars,
	FaChevronDown,
} from "react-icons/fa";

export default function Sidebar() {
	const [isMobile, setIsMobile] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false); // Start collapsed by default
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	const settingsRef = useRef(null); // Ref for settings dropdown

	// Detect screen size changes
	useEffect(() => {
		const handleResize = () => {
			const mobileOrMediumView = window.innerWidth < 1024; // Mobile and medium screens
			setIsMobile(mobileOrMediumView);

			// Collapse sidebar for mobile and medium screens, and expand on larger screens
			if (mobileOrMediumView) {
				setIsExpanded(false); // Collapsed for both mobile and medium screens
			} else {
				setIsExpanded(true); // Expanded for large screens
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

	// Toggle settings dropdown
	const toggleSettingsDropdown = () => {
		setIsSettingsOpen(!isSettingsOpen);
	};

	// Close dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (settingsRef.current && !settingsRef.current.contains(event.target)) {
				setIsSettingsOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="flex min-h-screen bg-[#0f0f0f] pb-[90px]">
			{/* Sidebar */}
			<aside
				className={`h-[calc(100vh-90px)] bg-gradient-to-b from-[#2E0854] to-[#4B0082] p-5 fixed top-0 left-0 transition-all duration-300 ease-in-out 
          ${isExpanded ? "w-60" : "w-16"} 
          ${isMobile ? "z-50" : ""}`}>
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
								className={`flex items-center gap-4 text-white hover:text-[#A259FF] transition px-2 py-2 rounded-md 
                  ${isExpanded ? "w-full" : "w-16 hover:w-48"}`}
								onMouseEnter={() => setHoveredItem(label)}
								onMouseLeave={() => setHoveredItem(null)}>
								{/* Icon */}
								<span className="text-2xl min-w-[2rem]">{icon}</span>

								{/* Show label if expanded OR on hover */}
								{(isExpanded || hoveredItem === label) && (
									<span
										className={`overflow-hidden whitespace-nowrap transition-all duration-300 
                      ${
												isExpanded ? "opacity-100 w-auto" : "opacity-100 w-32"
											}`}>
										{label}
									</span>
								)}
							</Link>
						))}
					</nav>

					{/* Spacer for pushing Settings to the bottom */}
					<div className="flex-grow"></div>

					{/* Sidebar Bottom Section */}
					<div className="space-y-4">
						{/* Settings Dropdown */}
						<div
							className={`relative ${isExpanded ? "w-full" : "w-16"}`}
							onMouseEnter={() => setHoveredItem("Settings")}
							onMouseLeave={() => setHoveredItem(null)}
							ref={settingsRef} // Attach ref here
						>
							<button
								className={`flex items-center gap-4 text-white hover:text-[#A259FF] transition px-2 py-2 rounded-md w-full`}
								onClick={toggleSettingsDropdown}>
								{/* Icon */}
								<span className="text-2xl min-w-[2rem]">
									<FaCog />
								</span>

								{/* Label */}
								{(isExpanded || hoveredItem === "Settings") && (
									<span
										className={`overflow-hidden whitespace-nowrap transition-all duration-300 
                      ${
												isExpanded ? "opacity-100 w-auto" : "opacity-100 w-32"
											}`}>
										Settings
									</span>
								)}

								{/* Dropdown Icon */}
								<FaChevronDown
									className={`ml-2 ${isSettingsOpen ? "rotate-180" : ""}`}
								/>
							</button>

							{/* Mobile Dropdown Menu */}
							{isMobile && isSettingsOpen && (
								<div
									className="absolute left-0 mt-2 bg-[#2E0854] p-2 rounded-md w-48"
									style={{ maxWidth: "100vw", marginLeft: "2rem" }}>
									<Link
										href="/account"
										className="block text-white hover:text-[#A259FF] px-2 py-1 rounded-md">
										Account
									</Link>
									<Link
										href="/preferences"
										className="block text-white hover:text-[#A259FF] px-2 py-1 rounded-md">
										Preferences
									</Link>
								</div>
							)}

							{/* Desktop Dropdown Menu */}
							{!isMobile && isSettingsOpen && (
								<div
									className={`absolute left-0 mt-2 bg-[#2E0854] p-2 rounded-md w-full 
                    ${isExpanded ? "max-w-[200px]" : "max-w-[100px]"}`}>
									<Link
										href="/account"
										className="block text-white hover:text-[#A259FF] px-2 py-1 rounded-md">
										Account
									</Link>
									<Link
										href="/preferences"
										className="block text-white hover:text-[#A259FF] px-2 py-1 rounded-md">
										Preferences
									</Link>
								</div>
							)}
						</div>
					</div>
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
