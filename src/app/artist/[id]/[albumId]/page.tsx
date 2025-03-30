"use client";
import { useParams } from "next/navigation";
import Album from "@/components/hi/Album";

const AlbumPage = () => {
	const params = useParams();
	const albumId = params.albumId as string; // Type assertion since params can be string | string[]

	return (
		<div>
			<Album albumId={albumId} />
		</div>
	);
};

export default AlbumPage;
