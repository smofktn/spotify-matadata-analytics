import { SearchType } from "../types/SearchType";

export const isSearchType = (type: string): type is SearchType => {
  return ["album", "artist", "playlist", "track", "show", "episode"].includes(
    type
  );
};
