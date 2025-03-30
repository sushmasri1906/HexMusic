import Image from "next/image";
import Link from "next/link";

interface AlbumCardProps {
	id: string;
	title: string;
	artist: string;
	image: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ id, title, artist, image }) => {
	return (
		<Link
			href={`/album/${id}`}
			className="block bg-gray-900 p-4 rounded-lg shadow-lg hover:bg-gray-800 transition">
			<div className="relative w-full h-48">
				<Image
					src={image}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-lg"
				/>
			</div>
			<h3 className="mt-3 text-white text-lg font-bold">{title}</h3>
			<p className="text-gray-400 text-sm">{artist}</p>
		</Link>
	);
};

export default AlbumCard;
