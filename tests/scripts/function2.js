console.log("The future say: ", future());

function future() {
    return "You'll never have flying cars";
}

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count ++) {
        result *= base;
    }
    return result;
};

const square1 = (x) => {return x * x};
const square2 = x => x * X;

