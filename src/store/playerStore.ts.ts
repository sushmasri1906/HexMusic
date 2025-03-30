// store/playerStore.ts
import { create } from "zustand";

interface PlayerState {
	currentTrack: string | null;
	isPlaying: boolean;
	playTrack: (track: string) => void;
	pauseTrack: () => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
	currentTrack: null,
	isPlaying: false,
	playTrack: (track) => set({ currentTrack: track, isPlaying: true }),
	pauseTrack: () => set({ isPlaying: false }),
}));
