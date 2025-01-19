import { spotifyApi } from "..";
import { getAccessToken } from "./getAccessToken";

export const getTrackById = async (
  trackId: string
): Promise<SpotifyApi.SingleTrackResponse | null> => {
  await getAccessToken();

  try {
    const res = await spotifyApi.getTrack(trackId);
    return res.body;
  } catch (error) {
    console.error("曲情報の取得に失敗しました\n", error);
    return null;
  }
};
