const carMakers = ['ford','toyota','chevy'];
const carByMake:string[][] = []; // array of arrays type of string

const car = carMakers[0];
const myCar = carMakers.pop();

//carMakers.push(100); // return an error for the example

carMakers.map((car:string):string =>{
    return car;
});

//flexible types
const importantDates: (Date | string)[] = [new Date(), '2010-10-10'];
