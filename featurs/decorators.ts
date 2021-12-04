@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    get formattedColor(): string {
        return `this boats color is ${this.color}`;
    }


    @logError('boat was sun in the sea')
    pilot(@parameterDecorator speed:string,
    @parameterDecorator generateWake:boolean): void {
        throw new Error();
        console.log('swish');
    }
}

function classDecorator( constructor: typeof Boat) {
console.log(constructor)
}

function parameterDecorator(target: any, key: string, index:number) {
console.log(key,index)
}

function testDecorator(target: any, key: string) {
console.log(target)
console.log(key)
}

function logError(errMessage:string) { // that is decorator factory - decorator factory is the option to pass
    // a variables to the decorator like the  'errMessage' in the logError decorator
   return  function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        try {
            method()
        } catch (e) {
            console.log(errMessage)
        }
    }
}

