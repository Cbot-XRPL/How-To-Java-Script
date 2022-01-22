//callbacks & foreach


     //DEFINITON     //arg              //func
/* const myFunc = (callbackFunc) => {
//do something
let value = 50;
callbackFunc(value)
};

      //run
myFunc(value => {
    //do something

    //check
    console.log(value);
}); */


let people = ['mario', 'luigi', 'ryu', 'shaun', 'cbot'];


     //func name       //arg           //func
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

/* people.forEach((person, index) => {
    console.log(index, person);
} */

          //run
people.forEach(logPerson);




