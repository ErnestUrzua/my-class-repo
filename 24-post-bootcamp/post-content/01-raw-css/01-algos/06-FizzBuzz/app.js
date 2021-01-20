function fizzBuzz() {
    //create function that takes in an array of numbers
    // check if the number is a mupltiple of  3, 5, or both
    //if so change that number to say fizz buzz or fizzbuzz

    for (let i = 1; i <= 100; i++) {
        let x;

        if (i % 3 ==0 && i % 5 == 0){
            x = 'fizzbuzz'; 
            console.log(x);
            continue;
            }

        else if (i % 3 == 0) {
            x = 'fizz';
            console.log(x);
            continue;
        }

        else if (i % 5 == 0) {
            x = 'buzz';
            console.log(x);
            continue;
        }
        console.log(i);

    }

}

fizzBuzz();