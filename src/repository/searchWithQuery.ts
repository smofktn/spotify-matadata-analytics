import { spotifyApi } from ".."
import { SearchType } from "../types/SearchType"
import { SearchOptions } from "../types/SerchOptions"
import { getAccessToken } from "./getAccessToken";

export const searchWithQuery = async(
  query: string,
  types: SearchType[],
  options: SearchOptions,
):Promise<SpotifyApi.SearchResponse | void> => {
  await getAccessToken();
  try{
    const res = await spotifyApi.search(query,types,options);
    if(res.body){
      return res.body;
    }else{
      console.error('レスポンスにボディが含まれていません')
    }
  }catch(error){
    console.error('クエリに検索に失敗しました\n', error)
  }

}
