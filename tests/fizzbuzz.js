
for(let number = 1; number <= 100; number++){
    if(number % 3 == 0) {
        console.log('fizz');
    } if(number % 5 == 0 || number % 5 == 5) {
        console.log('buzz');
    } else {
        console.log(number);
    }
}