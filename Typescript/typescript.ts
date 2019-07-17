const sum = (a : number, b : number) => {
    return a + b;
}

const asnswer = sum(4, 5);

console.log(asnswer);


//boolean
let isCool: boolean = true;

//number
let age: number = 22;

//string
let eyeColor: string = 'brown';
let favoriteQuote: string = `Im not old, im only ${age}`;

//Array
let pets: string[] = ['cat', 'dog', 'pig'];
let petstwo: Array<string> = ['lion', 'dragon', 'lizard'];

//Object
let wizard: object = {
    a: 'David',
    age: '22',
    city: 'Tegucigalpa'
}

//null and undefined

let met: undefined = undefined
let noo: null = null

//Tuple
let basket: [string, number];
basket = ['basketball', 5];

//Enum
enum Size {Small = 1, Medium = 2, Large = 3}
let sizeName: number = Size.Small;

// Any - !!!!!!!!!!!!!!!!!!!!! BE CAREFUL !!!!!!!!!!!!!!!!!!

let whatever: any = 'aghhhhh nooooooo!!!!';
whatever: 5;

//void 
let sing = () => {
    console.log('lalalaala')
}

//never 
let error = (): never => {
    throw Error('ooops');
}

//interface

interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Fight');
}

// type assertion

interface catArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as catArmy
dog.count

// function 
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('Fight');
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('Fight');
    return 5;
}

// classes

class Animal {
    sing: string = 'lalalala';
    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAWWWWWR')
console.log(lion.greet());

// Union

let confused: string | number | boolean = true;