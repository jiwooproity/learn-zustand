import { ChangeEvent } from "react";
import { create } from "zustand";

export interface TextStoreIF {
  text: string;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useTextStore = create<TextStoreIF>((set) => ({
  text: "",
  changeText: (e: ChangeEvent<HTMLInputElement>) => set(() => ({ text: e.target.value })),
}));
