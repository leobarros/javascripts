function buying(work1, work2) {
    const buyIcecream = work1 || work2
    const buyTv50 = work1 && work2
    //const buyTv32 = !!(work1 ^ work2) // bitwise xor
    const buyTv32 = work1 != work2
    const heath = !buyIcecream //unary operator

    return { buyIcecream, buyTv50, buyTv32, heath}
}

console.log(buying(true, true))
console.log(buying(true, false))
console.log(buying(false, true))
console.log(buying(false, false))