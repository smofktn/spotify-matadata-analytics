export type SearchOptions = {
  limit?: number | undefined;
  offset?: number | undefined; //結果の開始位置
  market?: string | undefined;
  include_external?: "audio" | undefined;
};
