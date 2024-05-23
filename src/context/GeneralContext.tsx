import { PropsWithChildren, createContext, useContext } from "react";
import { GameQuery } from "../App";
import { Genre } from "../hooks/useGenres";

export interface GeneralContext {
  genre: Genre | null;
  setGenre: (genre: Genre | null) => void;
}

export const GeneralContext = createContext<GeneralContext>({
  genre: null,
  setGenre: () => {},
});
