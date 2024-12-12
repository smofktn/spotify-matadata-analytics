

// offsetは0-1000

export const generateRandomOffset = ()=>{
    const maxOffset = 1000;
    return Math.floor(Math.random() * 1000);
}


//年代ランダム
//range 2000-2024

export const generateRandomYear = () => {
    const baseYear = 2000;
    const hoge = Math.floor(Math.random() * 24)

    return baseYear + hoge
}



