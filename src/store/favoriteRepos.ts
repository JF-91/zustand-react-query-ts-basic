import { create } from "zustand";
import { persist } from "zustand/middleware";

type favoriteReposState = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};


//persis guarda el estado en el localstorage
//set es el estado
export const useFavoriteReposStore = create(
  persist<favoriteReposState>(
    (set) => ({
      favoriteReposIds: [],
      addFavoriteRepo: (id: number) => {
        set((state) => {
          return { favoriteReposIds: [...state.favoriteReposIds, id] };
        });
      },

      removeFavoriteRepo: (id: number) => {
        set((state) => {
          return {
            favoriteReposIds: state.favoriteReposIds.filter(
              (repoId) => repoId !== id
            ),
          };
        });
      },
    }),
    { name: "favorite-repos" }
  )
);
