import Image from "next/image";
import Link from "next/link";

interface ArtistCardProps {
	id: string;
	name: string;
	genre: string;
	image: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ id, name, genre, image }) => {
	return (
		<Link
			href={`/artist/${id}`}
			className="block bg-gray-900 p-4 rounded-lg shadow-lg hover:bg-gray-800 transition">
			<div className="relative w-full h-48">
				<Image
					src={image}
					alt={name}
					layout="fill"
					objectFit="cover"
					className="rounded-lg"
				/>
			</div>
			<h3 className="mt-3 text-white text-lg font-bold">{name}</h3>
			<p className="text-gray-400 text-sm">{genre}</p>
		</Link>
	);
};

export default ArtistCard;
