import { SearchType } from './type/SearchType';
import SpotifyWebApi from 'spotify-web-api-node';
import 'dotenv/config';
import { getAccessToken } from './repository/getAccessToken';
import { getTrackById } from './repository/getTrackById';
import { searchWithQuery } from './repository/searchWithQuery';
import { SearchQueryFieldType } from './type/SearchQueryFieldType';
import { SearchOptions } from './type/SerchOptions';
import { generateRandomValueWithMax } from './common/generateRandomValue';

// Spotify APIクライアントの初期化
export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret:process.env.SPOTIFY_CLIENT_SECRET,
});

const query = 'coda' // 'year:>=2000 genre:j-pop popularity:>30'
const limit = 5;
const maxOffset = 1000;

const type:SearchType[] = ["artist"]
const option:SearchOptions = {
  limit:limit,
  offset:generateRandomValueWithMax(maxOffset),
  market:'JP',
}

searchWithQuery(query, type, option)
  .then((res) => {
    console.log('レスポンス\n', JSON.stringify(res?.body));
  })
  .catch((error) => {
    console.error('Error:', error);
  });

