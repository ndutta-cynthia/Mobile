let a=20;
let b=30;

let add= a+b;
console.log({add});


let subtract =a-b;
console.log({subtract});

let divide= a/b;
console.log({divide});

let multiply =a*b;
console.log({multiply});

let c= '20';
let looselyEgualTo = a==c;
console.log({looselyEgualTo});

let strictlyEqualTo= a ===c;
console.log({strictlyEqualTo});

let notEgualTo =a !=c;
console.log({notEgualTo});

let strictlyNotEqualTo=a!==c;
console.log({strictlyNotEqualTo});

//Increament
a++;
console.log({a});

//Decreament
b--;
console.log({b});

a+=5
console.log({a});

//Implicit Corcion
let d=1*c;
console.log({d});

let e=+c;
console.log({e});

//Explicit coercion
let f= Number(c);
console.log({f}); //to convert a number to float use parsefloat

let text = "extravaganza";
let output = text.substring(0,8);
console.log({output})
// no. 1 Extract the last four characters from the string below;"extravaganza"


//no.2 Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = "The quick fox jumped over the lazy dog";
const addString = food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});


//no.3 Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
let story="The quick brown fox jumps over the lazy dog";
console.log((story.match('the')).length);
console.log((story.match('brown')).length);

//no.4
const string1 = "The pupils are reading in the library";
console.log({index: string1.indexOf('are')})



//no.5
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  console.log(titleCase('A wonderful world'));

  const names= "w3school";
  let letter= names[2];
  console.log(letter);

  






