import { spotifyApi } from "..";
import { getAccessToken } from "./getAccessToken";

export const getTrackById = async (trackId: string) => {
  await getAccessToken();

  try {
    return await spotifyApi.getTrack(trackId);
  } catch (error) {
    console.error("曲情報の取得に失敗しました\n", error);
  }
};
