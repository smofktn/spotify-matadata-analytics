import { spotifyApi } from "..";

// アクセストークンを取得
export const getAccessToken = async (): Promise<void> => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body["access_token"];
    const expiresIn = data.body["expires_in"];

    console.log("Access Token:", accessToken);
    console.log("Token Expires In", expiresIn);

    // APIクライアントにアクセストークンをセット
    return spotifyApi.setAccessToken(accessToken);
  } catch (error) {
    console.error("Error retrieving access token:", error);
    throw error;
  }
};
