class ArrayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {
    }

    get(index: number): string {
        return this.collection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {
    }

    get(index: number): T {
        return this.collection[index]
    }

}

new ArrayOfAnything<string>(['a', 'b', 'c']);
new ArrayOfAnything<number>([1, 2, 3]);

function printString(arr:string[]):void{
    for (let i = 0; i <arr.length ; i++) {
        console.log(arr[i])
    }
}

function printNumber(arr:number[]):void{
    for (let i = 0; i <arr.length ; i++) {
        console.log(arr[i])
    }
}

function printAnything<T>(arr:T[]):void {
    for (let i = 0; i <arr.length ; i++) {
        console.log(arr[i])
    }
}

printAnything<string>(['a', 'b', 'c']);
printAnything<number>([1, 2, 3]);


class Car {
    print(){
        console.log('im a car')
    }
}

class House {
    print(){
        console.log('im a house')
    }
}

interface Printable {
    print():void
}

function printCarsOrHouses<T  extends Printable>(arr:T[]):void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}

printCarsOrHouses<House>([new House(),new House()])
printCarsOrHouses<Car>([new Car(),new Car()])