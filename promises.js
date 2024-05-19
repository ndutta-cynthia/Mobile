const internship = false;
const ourPromise = new Promise((resolve,rejected)=>{
    if(internship){
        resolve(`I made it`)
    }
    else{
        rejected (`I'll try hadder`)
    }
})
ourPromise.then(()=>{
    console.log(`I will continue working hard`);
})
.catch((error)=>{
    console.log({error})
    console.log(`I'll continue applying for job`);
})
.finally(()=>{
    console.log(`I will be a software engineer`);
})
;

console.log({ourPromise});
// .then         = successful
// .catch        =rejected
// .finally       = resolve,rejected

async function myAkiaChixDream(){
try{
    console.log(`This is my dream`);
    await ourPromise;
}
catch{
    console.log(`Our dream is not yet successiful`)
}
}
myAkiaChixDream();
