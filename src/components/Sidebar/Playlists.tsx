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
