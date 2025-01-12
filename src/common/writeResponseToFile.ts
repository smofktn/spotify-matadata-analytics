import fs from "fs";

export const writeResponseToFile = (
  outputFilePath: string,
  responseBody: void | SpotifyApi.SearchResponse //TODO:Search以外にも対応できるようにする
): void => {
  // レスポンスデータをファイルに書き込み
  fs.writeFile(
    outputFilePath,
    JSON.stringify(responseBody, null, 2),
    "utf-8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log(`Response data saved to ${outputFilePath}`);
    }
  );
};
