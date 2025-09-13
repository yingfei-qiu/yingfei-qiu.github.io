// console.log("Week 4 - Hello World!"); 

// Document Object Model
let greeting = document.getElementById("greeting");
console.log(greeting); //returns an element!

//Get all instances of <p>
let paras = document.getElementsByTagName('p');
console.log(paras);

//item of aray
for (para of paras){
    //console.log(para.innerText); // Element object's property "innerText"
    //para.innerText="Booyah"; // changes the property
}

var something = 'something';
let another = 'another';

var something = 'new something';
console.log(something);

// when you use let keyword, the same variable cannot be declared
// let another = 'new another'
// console.log(another);

//scope

//if-block
if (3>2){
    let another = 'another inside block scope';
    console.log(another);
    //beyond the if block, this another variable disappears (var only valid)
}
console.log(another);
