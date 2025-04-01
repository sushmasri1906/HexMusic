import chill from "../../../public/chill.jpeg";
import celeb from "../../../public/celeb.jpeg";
import workout from "../../../public/workout.jpeg";
import lost from "../../../public/4.jpeg";
import Image, { StaticImageData } from "next/image";
import ln from "../../../public/lonelynights.jpeg";
import beats from "../../../public/beats.jpeg";
import innocence from "../../../public/innocence.jpeg";
import um from "../../../public/unfrgettable_mem.jpeg";
import ha from "../../../public/heartache.jpeg";
import iv from "../../../public/invincible.jpeg";
import ad from "../../../public/adversity.jpeg";
import tm from "../../../public/temptations.jpeg";
import wl from "../../../public/wanderlust.jpg";
import uf from "../../../public/unknown_fear.jpeg";

export default function Playlists() {
	const playlists = [
		{ id: 1, title: "Chill Vibes", emotion: "chill", imageUrl: chill },
		{ id: 2, title: "Top Hits", emotion: "celebration", imageUrl: celeb },
		{ id: 3, title: "Wanderlust", emotion: "wanderlust", imageUrl: wl },
		{ id: 4, title: "Love Lost", emotion: "love lost", imageUrl: lost },
		{ id: 5, title: "Lonely Nights", emotion: "loneliness", imageUrl: ln },
		{
			id: 6,
			title: "Celebration Beats",
			emotion: "celebration",
			imageUrl: beats,
		},
		{ id: 7, title: "Innocence", emotion: "innocence", imageUrl: innocence },
		{
			id: 8,
			title: "Unforgettable Memories",
			emotion: "nostalgia",
			imageUrl: um,
		},
		{ id: 9, title: "Heartache", emotion: "regret", imageUrl: ha },
		{
			id: 10,
			title: "Feeling Invincible",
			emotion: "feeling invincible",
			imageUrl: iv,
		},
		{ id: 11, title: "Adversity", emotion: "adversity", imageUrl: ad },
		{ id: 12, title: "Temptation", emotion: "temptation", imageUrl: tm },
		{ id: 13, title: "Workout Music", emotion: "passion", imageUrl: workout },
		{ id: 14, title: "Fear of the Unknown", emotion: "fear", imageUrl: uf },
	];

	return (
		<div className="px-6 py-6">
			<h2 className="text-4xl font-bold text-white mb-8 text-center">
				Playlists
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
				{playlists.map((playlist) => (
					<div
						key={playlist.id}
						className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
						<div className="relative w-full aspect-square">
							<Image
								src={playlist.imageUrl as StaticImageData}
								alt={playlist.title}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
								className="object-cover object-center w-full h-full transition-all duration-300 group-hover:opacity-90"
							/>
							<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
						</div>

						<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
							<h3 className="text-lg font-semibold text-white text-center">
								{playlist.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

// Function to get the emotion-based class for styling
function getEmotionClass(emotion: string) {
	switch (emotion) {
		case "chill":
			return "from-[#8A2BE2] to-[#4B0082]"; // Chill vibes colors
		case "celebration":
			return "from-[#FFD700] to-[#FF6347]"; // Celebration colors
		case "passion":
			return "from-[#D32F2F] to-[#F57C00]"; // Passion colors
		case "love lost":
			return "from-[#F44336] to-[#E91E63]"; // Love Lost colors (romantic)
		case "loneliness":
			return "from-[#2C3E50] to-[#34495E]"; // Lonely tones (blue-gray)
		case "innocence":
			return "from-[#FFEB3B] to-[#8BC34A]"; // Innocence (soft yellow to green)
		case "nostalgia":
			return "from-[#795548] to-[#D32F2F]"; // Nostalgia colors (earthy)
		case "regret":
			return "from-[#B71C1C] to-[#8B0000]"; // Regret (deep red)
		case "feeling invincible":
			return "from-[#00B0FF] to-[#1E88E5]"; // Invincible (vibrant blue)
		case "adversity":
			return "from-[#9E9E9E] to-[#616161]"; // Adversity (gray tones)
		case "temptation":
			return "from-[#D32F2F] to-[#FF4081]"; // Temptation (red to pink)
		case "wanderlust":
			return "from-[#26C6DA] to-[#00ACC1]"; // Wanderlust (turquoise shades)
		case "fear":
			return "from-[#212121] to-[#757575]"; // Fear (dark tones)
		case "hope":
			return "from-[#8BC34A] to-[#66BB6A]"; // Hope (fresh green)
		case "solitude":
			return "from-[#37474F] to-[#607D8B]"; // Solitude (gray-blue)
		default:
			return "from-[#333333] to-[#000000]"; // Default gradient
	}
}
