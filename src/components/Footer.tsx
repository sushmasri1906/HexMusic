import Link from "next/link";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaHome,
	FaSearch,
	FaInfoCircle,
	FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="w-full bg-[#181818] text-white pt-6 pb-20 px-6 border-t mt-20  border-gray-700 sm:mb-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Brand & Description */}
				<div>
					<Link href="/">
						<h1 className="text-2xl font-bold text-[#A259FF] cursor-pointer">
							HexMusic
						</h1>
					</Link>
					<p className="text-sm text-gray-400 mt-2">
						Your ultimate music streaming experience.
					</p>
				</div>

				{/* Quick Links with Icons */}
				<div className="flex flex-col space-y-3">
					<h2 className="text-lg font-semibold">Navigation</h2>
					<Link
						href="/"
						className="flex items-center space-x-2 text-gray-400 hover:text-[#A259FF] transition">
						<FaHome className="text-lg" /> <span>Home</span>
					</Link>
					<Link
						href="/explore"
						className="flex items-center space-x-2 text-gray-400 hover:text-[#A259FF] transition">
						<FaSearch className="text-lg" /> <span>Explore</span>
					</Link>
					<Link
						href="/about"
						className="flex items-center space-x-2 text-gray-400 hover:text-[#A259FF] transition">
						<FaInfoCircle className="text-lg" /> <span>About</span>
					</Link>
					<Link
						href="/contact"
						className="flex items-center space-x-2 text-gray-400 hover:text-[#A259FF] transition">
						<FaEnvelope className="text-lg" /> <span>Contact</span>
					</Link>
				</div>

				{/* Social Media Links */}
				<div>
					<h2 className="text-lg font-semibold">Follow Us</h2>
					<div className="flex space-x-4 mt-6">
						<Link
							href="#"
							className="text-gray-400 hover:text-[#A259FF] text-xl">
							<FaFacebook />
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-[#A259FF] text-xl">
							<FaTwitter />
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-[#A259FF] text-xl">
							<FaInstagram />
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-[#A259FF] text-xl">
							<FaYoutube />
						</Link>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
				© {new Date().getFullYear()} HexMusic. All rights reserved.
			</div>
		</footer>
	);
}
