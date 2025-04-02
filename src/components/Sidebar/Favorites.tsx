import Image, { StaticImageData } from "next/image";
import sm from "../../../public/soothingmelodies.jpg";
import pa from "../../../public/poweranthem.jpg";
import df from "../../../public/deepfocus.jpg";
import rn from "../../../public/romanticnights.jpeg";
import eb from "../../../public/energizingbeats.jpeg";
import tc from "../../../public/timelessclassic.jpeg";

const favorites = [
	{ id: 1, title: "Energizing Beats", imageUrl: eb },
	{ id: 2, title: "Power Anthems", imageUrl: pa },
	{ id: 3, title: "Deep Focus", imageUrl: df },
	{ id: 4, title: "Romantic Nights", imageUrl: rn },
	{ id: 5, title: "Soothing Melodies", imageUrl: sm },
	{ id: 6, title: "Timeless Classics", imageUrl: tc },
];

export default function Favorites() {
	return (
		<div className="text-white text-center py-20 bg-gradient-to-r from-[#2E0854] to-[#4B0082] my-6">
			<h2 className="text-4xl font-bold text-white mb-8 text-center">
				Favorites
			</h2>
			<div className="flex flex-wrap justify-center gap-6">
				{favorites.map((fav) => (
					<div
						key={fav.id}
						className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px]">
						{/* Image Container */}
						<div className="relative w-full h-full">
							<Image
								src={fav.imageUrl as StaticImageData}
								alt={fav.title}
								fill
								className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-90 bg-black"
							/>
						</div>

						{/* Title Overlay */}
						<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
							<h3 className="text-lg font-semibold text-white text-center">
								{fav.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
