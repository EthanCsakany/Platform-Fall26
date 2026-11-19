//alert = "hello world"
var s = "hello";
console.log("variable s is " +s);


function print3Ways() {
    alert("Hello world!");
    console.log("Hello World");
    document.write("Hello World!");
}

const a = [1,2,3,4,5];

function sumArray() {
    var total = 0;
    for (var num of a) {
        total += num;
    }
    return total;
}

function findMin() {
    return Math.min(...a)
}

function findMax() {
    return Math.max(a)
}

function average() {
    return sumArray() / a.length;
}

function funWithArrays() {
    console.log("inside funWithArrays" + a);
    document.write("The sum of the array is " + sumArray());
    document.write("<br> The minimum element is " + findMin());
    document.write("<br> The maximum element is " + findMax());
    document.write("<br> The average of the elements in the array is " + average());
}

function plainOldFunction() {
    console.log("inside plain old function");
    function nestedFunction() {
        console.log("inside nested function");
    }
    nestedFunction();
}

function callback(name) {
    console.log("Hello " + name);
}

function firstFunction(s, helloCallback) {
    helloCallback(s);
}

function soManyFunctions() {
    console.log("inside soManyFunctions");
    plainOldFunction();
    firstFunction("Bob", callback);
}

const dog = {
    name: "Gizmo",
    type: "goldenretriever",
    age: 10,
    tricks: ["roll over", "sit", "jump"],
    speak: function() {console.log("Woof"); }
};
console.log("My dog " + dog.name + " is " + dog.age
    + " years old and can " + dog.tricks[1]);
dog.speak();