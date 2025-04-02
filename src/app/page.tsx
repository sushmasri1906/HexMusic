"use client";
import HomePage from "@/components/Home/HomePage";
import { useEffect } from "react";
import { useTokenStore } from "@/store/tokenStore";
import Playlists from "@/components/Sidebar/Playlists";
import Favorites from "@/components/Sidebar/Favorites";
import Genres from "@/components/Sidebar/Genres";

export default function Home() {
	
	const token = useTokenStore((state) => state.token);
	const setToken = useTokenStore((state) => state.setToken);
	const getData = async () => {
		try {
			const response = await fetch("/api/getToken");
			console.log(response, "Response");

			if (!response.ok) throw new Error("Failed to fetch token");

			const data = await response.json();

			setToken(data.accessToken);
			console.log(token);
		} catch (error) {
			console.error("Error fetching access token:", error);
		}
	};

	useEffect(() => {
		if (token.length === 0) {
			getData();
		}
	}, []);

	return (
		<>
			<HomePage />
			<Playlists/>
			<Favorites/>
			<Genres/>
		
		</>
	);
}
