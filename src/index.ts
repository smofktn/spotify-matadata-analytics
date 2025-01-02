import { SearchType } from "./type/SearchType";
import SpotifyWebApi from "spotify-web-api-node";
import "dotenv/config";
import { searchWithQuery } from "./repository/searchWithQuery";
import { SearchOptions } from "./type/SerchOptions";
import { generateRandomValueWithMax } from "./common/generateRandomValue";
import yargs from "yargs";
import { isSearchType } from "./common/isSearchType";

// Spotify APIクライアントの初期化
export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const argv = yargs
  .options({
    limit: {
      type: "number",
      describe: "取得したいアイテム数",
      demandOption: false,
      default: 10,
    },
    type: {
      type: "string",
      describe:
        "取得したいアイテムタイプ（album、artist、playlist、track、show、episode）",
      demandOption: true,
      default: "track",
    },
  })
  .parseSync();

const query = "coda"; // 'year:>=2000 genre:j-pop popularity:>30'
const limit = argv.limit;
const maxOffset = 1000;

let type: SearchType[] = [];
if (isSearchType(argv.type)) {
  type = [argv.type];
} else {
  console.error("不正なtypeが指定されました。\n", argv.type);
  process.exit(1);
}

const option: SearchOptions = {
  limit: limit,
  offset: generateRandomValueWithMax(maxOffset),
  market: "JP",
};

searchWithQuery(query, type, option)
  .then((resBody) => {
    console.log("レスポンス\n", JSON.stringify(resBody));
  })
  .catch((error) => {
    console.error("Error:", error);
  });
