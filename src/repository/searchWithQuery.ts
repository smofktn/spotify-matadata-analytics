import { spotifyApi } from ".."
import { SearchType } from "../type/SearchType"
import { SearchOptions } from "../type/SerchOptions"
import { getAccessToken } from "./getAccessToken";

export const searchWithQuery = async(
  query: string,
  types: SearchType[],
  options: SearchOptions,
) => {
  await getAccessToken();
  try{
    return await spotifyApi.search(query,types,options);
  }catch(error){
    console.error('クエリに検索に失敗しました\n', error)
  }
  
}
