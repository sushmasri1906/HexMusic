import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
		});
		const data = await response.json();
		console.log(data, "api Data");
		const token = data.access_token;
		return NextResponse.json({ accessToken: token });
	} catch (error) {
		return NextResponse.json(
			{
				error:
					error instanceof Error ? error.message : "Failed to get access token",
			},
			{ status: 500 }
		);
	}
}
