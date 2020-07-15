function Algo() { }

Algo.prototype.reverse = function (str) {
    let revNum = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revNum += str[i];

    }
    return revNum;
};

Algo.prototype.isPalindrome = function (str) { 
    return this.reverse(str) === str

};

Algo.prototype.capitalize = function (str) { 
    const arr = Array.from(str);
    arr[0] = arr[0].toUpperCase();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == )
    }
};

let algo = new Algo();
algo.reverse("hello");

algo.isPalindrome("hello");
console.log(algo.isPalindrome("hello"));

module.exports = Algo;
