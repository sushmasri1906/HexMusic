import { create } from "zustand";

interface ArtistState {
	artistId: string;
	setArtistId: (token: string) => void;
}

export const useArtistStore = create<ArtistState>((set) => ({
	artistId: "",
	setArtistId: (artistId) => set({ artistId: artistId }),
}));

