"use client";
import ArtistAlbums from "@/components/hi/ArtistAlbums";
import SongList from "@/components/SongList";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
	const { id } = useParams();
	console.log(id, "id");
	if (id)
		return (
			<div>
				<Link href={`/artist/${id}/hi`}></Link>
				<ArtistAlbums id={id as string} />
				<SongList songs={[]} />
			</div>
		);
	else return <div>No id</div>;
}
