
// offsetは0-1000
export const generateRandomOffset = ()=>{
    const maxOffset = 1000;
    return Math.floor(Math.random() * maxOffset + 1);
}


//年代ランダム
//range 2000-2024
export const generateRandomYear = () => {
    const baseYear = 2000;
    const hoge = Math.floor(Math.random() * 25)

    return baseYear + hoge
}

//limitは0-50
export const generateRandomLimit = () => {
  const maxLimit = 50;
  return Math.floor(Math.random() * maxLimit + 1)
}
