import Image, { StaticImageData } from "next/image";
import rock from "../../../public/rock.jpeg";
import jazz from "../../../public/jazz.jpeg";
import pop from "../../../public/pop.jpeg";
import hiphop from "../../../public/hiphop.jpeg";
import edm from "../../../public/edm.jpeg";
import classical from "../../../public/classical.jpeg";

const genres = [
	{ id: 1, title: "Rock", imageUrl: rock },
	{ id: 2, title: "Jazz", imageUrl: jazz },
	{ id: 3, title: "Pop", imageUrl: pop },
	{ id: 4, title: "Hip-Hop", imageUrl: hiphop },
	{ id: 5, title: "EDM", imageUrl: edm },
	{ id: 6, title: "Classical", imageUrl: classical },
];

export default function Genres() {
	return (
		<div className="px-6 py-6">
			<h2 className="text-4xl font-bold text-white mb-8 text-center">Genres</h2>
			<div className="flex flex-wrap justify-center gap-6">
				{genres.map((genre) => (
					<div
						key={genre.id}
						className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px]">
						{/* Image Container with Responsive Size */}
						<div className="relative w-full h-full">
							<Image
								src={genre.imageUrl as StaticImageData}
								alt={genre.title}
								fill
								className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-90 bg-black"
							/>
						</div>

						{/* Title Overlay */}
						<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
							<h3 className="text-lg font-semibold text-white text-center">
								{genre.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
