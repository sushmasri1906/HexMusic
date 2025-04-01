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
		<div className="px-6 py-6">
			<h2 className="text-4xl font-bold text-white mb-8 text-center">
				Favorites
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
				{favorites.map((fav) => (
					<div
						key={fav.id}
						className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black w-48 h-48 mx-auto">
						{/* Image Container */}
						<div className="relative w-full h-full">
							<Image
								src={fav.imageUrl as StaticImageData}
								alt={fav.title}
								fill
								sizes="192px"
								className="object-contain w-full h-full transition-all duration-300 group-hover:opacity-90 bg-black"
							/>
							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
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
