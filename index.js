 let fruits = ['mangoe','Banana', 'Orange'];

 let arr = new Array(20,30);
 console.log({fruits});
 console.log({arr});
 fruits[1]=2;
 console.log({fruits});
 fruits.slice(-1);
 console.log('last item',fruits.slice(-1)); //to find the last item in an array
 
 let addlast = fruits.push('Apple'); //used to add an element in the array
 console.log({fruits});

 let addStart = fruits.unshift('Pineapple');
 console.log({fruits});

 let removeLast = fruits.pop();
 console.log({fruits});

 let removeFast = fruits.shift();
 console.log({fruits});

 let newFruit = fruits.push('Tomato', 'Pear');
 console.log({fruits});

 let items = [20,30,40,50,60]; //sum   REDUCE METHOD
 let add = items.reduce((acc, cur)=> acc + cur);
 console.log({add});
                                                                            

 let multiply = items.map(item=> item*2); //map multiply
 console.log({multiply});

 let square = [];
items.forEach(item => {
    const multiple = (item *item);
 console.log(multiple);
 square.push(multiple);
//  total += item
});
console.log({square});
// console.log({total});

// restructuring
// ...rest is used  to display the remaining elements in ana array
let [num1, num2, num3, ...rest] = items 
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});

