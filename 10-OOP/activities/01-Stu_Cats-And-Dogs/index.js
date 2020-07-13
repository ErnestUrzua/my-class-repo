var cat = {
    raining: true,
    noise: "woof",
    makeNoise: function() {console.log(dog.noise)}
}

var dog = {
    raining: false,
    noise: "meow",
    makeNoise: function() {
        if (cat.raining === true){
            console.log(cat.noise);
        }
    
    }
}

cat.makeNoise();
dog.makeNoise();