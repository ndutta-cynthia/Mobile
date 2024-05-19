const cup = {
  color: "red",
  size: "small",
  texture: "smooth",
  shape: "round",
  functionality: {
    drinkType: "tea",
    temperature: "hot",
  },
  drink: function () {
    console.log("use me to drink");
    console.log(
      `My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`
    );
  },
};

console.log({ color: cup.color });
console.log("size", cup.size);
console.log("temperature", cup.functionality.temperature);
console.log("texture", cup["texture"]);

// adding a property
cup.model = "glass";
console.log({ cup });

// deleting a property
delete cup.model;
console.log({ cup });
// changing a property

cup.color = "green";
console.log({ cup });

cup.drink();

// to get all the keys of the object

const keys= Object.keys(cup);
console.log({keys});

const values= Object.keys(cup);
console.log({values})


const loop= Object.keys(cup).map(item=>{
    // return({key:item/ value:cup [item]});
})
console.log({loop});


Object.keys(cup).forEach(item=>{
    console.log({key:item,value:cup[item]});
})


