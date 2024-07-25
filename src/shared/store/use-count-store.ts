import { create } from "zustand";

export interface CountStoreIF {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

export const useCountStore = create<CountStoreIF>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () =>
    set((state) => {
      const { count } = state;

      if (count > 0) {
        return { count: state.count - 1 };
      } else {
        return { count: state.count };
      }
    }),
}));
