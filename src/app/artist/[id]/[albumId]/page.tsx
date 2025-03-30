"use client";
import Album from "@/components/hi/Album";
import { useEffect } from "react";

interface PageProps {
	params: {
		id: string;
		albumId: string;
	};
}

const AlbumPage = async ({ params }: PageProps) => {
	const { id, albumId } = params;

	useEffect(() => {
		console.log(id, albumId, "ID and Album ID");
	}, [id, albumId]);

	return (
		<div>
			<Album albumId={albumId} />
		</div>
	);
};

export default AlbumPage;
