let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;


let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let booleans: boolean[] = [true, true, false];

class Car {

}

let car: Car = new Car();

let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

const number: (x: number) => void = (x: number) => {
    console.log(x)
};

//When to use annotations
//1) functions that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);


//2) when we declare a variable in one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

//Variable whose type cannot be inferred correctly
let nums = [-12, -10, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0){
            numberAboveZero = nums[i];
    }
}


