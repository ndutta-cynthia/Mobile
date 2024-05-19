const personAge = (age) => {
    if (age >= 18) {
        return "You are an adult";
    } else if(age>= 13 && age < 18) {
        return "you are ateenager";
    } else {
        return "you are a child";
    }
};
console.log(personAge(26));

const greeting =  (dayOfTheWeek)=> {
    switch(dayOfTheWeek){
    case 'Monday':
        console.log ("Hello Monday");
        break
    
    case 'Teusday':
        console.log ("Hello Tuesday");
        break
    case 'Wednesday':
        console.log ("Hello Wednesday");
        break
    case 'Thursday':
        console.log ("Hello Thursday");
        break
    case 'Friday':
        console.log ("Hello Friday");
        break
    case 'saturday':
        console.log ("Hello saturday");
        break
    case 'Sunday':
        console.log ("Hello Sunday");
        break
        default:
            console.log('Not a day of the week');
    }

    }
    greeting(Tuesday);

