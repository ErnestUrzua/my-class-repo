//function that takes element and Array
// function should insert the element at the begining of index 0

// test case     arr[1,30,13,3], 9;
//expected output is 9,1,30,13,3

//test case 2  input [], 4
// out put arr[4]

//psudocode
//create a function that takes an arr and an element as an argument
// put that element into the arr index of 0
//take element and put into new array, 
//create for loop to iterate through array starting at 1
//do until array length is met.
// output will be the arr.
var array = [1,4,6,8,9]
var newarray = [];
function elementArray(arr,element) {
    newarray[0] = element;
    for (var i = 0;i<array.length;i++){
        newarray.push(array[i]);
    }

    console.log(arr);
    console.log(element);
    console.log(newarray);

}
elementArray(array,8);