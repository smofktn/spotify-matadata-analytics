// フィールド	説明	書き方の例
// track	曲名を指定	track:Shape of You
// artist	アーティスト名を指定	artist:Ed Sheeran
// album	アルバム名を指定	album:Divide
// genre	ジャンルを指定（Spotify のジャンル名を使用）。	genre:j-pop
// year	リリース年を指定	year:2017
// isrc	国際標準録音コード (ISRC) を指定	isrc:USUM71703861
// upc	国際標準商品コード (UPC) を指定（アルバム用）。	upc:602557678366
// tag	特殊タグを指定（hipster, new などが存在）。	tag:new

export type SearchQueryFieldType = {
  keyword?: string;
  track?: string;
  artist?: string;
  album?: string;
  genre?: string;
  year?: string;
  isrc?: string;
  upc?: string;
  tag?: string;
};
