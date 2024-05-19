function add(num1,num2){
    const sum= num1 + num2;
    console.log({console:sum});
    return{'sum': sum};

}  //when you declare a variable outside you can access the value inside/outdide and its called a global variable & viceversa and its called local.
console.log(add(2,3));
add(5,5);

function item (){ //local scope
    const names = ["Ann", "Eunice"];
    console.log({names});

}
item();

// function expressions.
// const subtract = funtion(num1,num2) {
    // console.log(num1-num2);
// }
// subtract(20-10);


// Arrow Funtions
const multiply = (num1,num2)=> console.log(num1 * num2);
                            //    =>num1 * num2. means you are returning
                            //  {return num1* num2}
                            // {console.log(num1 * num2)}. means you are consoling and returning
multiply(6,9);

//IIFEs

(function (){
    console.log("Hello there");

})();

// Hoisting
console.log({person})         //Only var allows hoisting 
var person = "human";
console.log("person 2...", person )

function greet(){
    console.log("Hi person");
}
hello();
const hello = ()=> console.log("This is a greeting");