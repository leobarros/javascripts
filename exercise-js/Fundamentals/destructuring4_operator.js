function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const values = Math.random() * (max - min) + min
    return Math.floor(values)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))