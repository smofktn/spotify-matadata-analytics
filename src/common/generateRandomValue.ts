
// offsetは0-1000
// limitは0-50
// デフォルトのminは0
export const generateRandomValueWithMax = (max: number) => {
  return Math.floor(Math.random() * max + 1);
};

//年代ランダム
//range 2000-2024
export const generateRandomValueWithMinAndMax = (min: number, max: number) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1));
  return min + randomValue;
};
