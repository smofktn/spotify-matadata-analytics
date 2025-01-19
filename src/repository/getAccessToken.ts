import { spotifyApi } from "..";

// アクセストークンを取得
export const getAccessToken = async (): Promise<void> => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body["access_token"];
    console.log("Access Token:", accessToken);

    // APIクライアントにアクセストークンをセット
    return spotifyApi.setAccessToken(accessToken);
  } catch (error) {
    console.error("Error retrieving access token:", error);
  }
};
