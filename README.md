# Spotify の楽曲をランダムで選曲し成分抽出するツール

## 背景と目的

- 楽曲のオーディオ特徴と再生数の関連の調査
- アーティストのマーケティング戦略の調査

## やること

- 50 組のアーティストに紐づく楽曲を各 20 曲ずつ選曲する

- 選曲条件
  - 2000 年以降
  - j-pop（邦楽）
  - 有名なアーティストを 25 組，有名でないアーティストを 25 組 ※または、有名な曲 10 曲、有名ではない曲を 10 曲

# 実行環境

```shell
# nodeのバージョン
v22.11.0
```

# 環境構築

```shell
# 必要なパッケージのインストール
npm install
```

```shell
cp .env.sample .env
# .envに発行したIDを入れてください
```

# 実行

```shell
npx tsc && node dist/index.js --genre=[ジャンル名]　--year=[リリース年] --limit=[取得したいアイテム数] --type=[取得したいアイテムタイプ*]
```

- `*`は必須
  - 必須ではない項目は入力しないとランダム値となる
- `limit`は 0 から 50 の間で設定する必要がある
- `type`は `album`, `artist`, `playlist`, `track`, `show`, `episode`, `audiobook` から 0 つ以上選択する

### 絞り込み条件

- 現在では`keyword`、`genre`、`year`の指定が可能
- 今後実装予定

| フィールド | 説明                                 | 例                        |
| ---------- | ------------------------------------ | ------------------------- |
| keyword    | キーワード                           | keyword                   |
| track      | トラック名                           | track:Imagine             |
| artist     | アーティスト名                       | artist:John Lennon        |
| album      | アルバム名                           | album:Let It Be           |
| genre      | ジャンル                             | genre:rock                |
| year       | リリース年（範囲も指定可能）         | year:1970, year:1980-1990 |
| isrc       | 国際標準レコーディングコード（ISRC） | isrc:USAT29900609         |
| upc        | 商品コード（UPC）                    | upc:00602508239386        |
