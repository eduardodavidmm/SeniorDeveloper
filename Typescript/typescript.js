var sum = function (a, b) {
    return a + b;
};
var asnswer = sum(4, 5);
console.log(asnswer);
//boolean
var isCool = true;
//number
var age = 22;
//string
var eyeColor = 'brown';
var favoriteQuote = "Im not old, im only " + age;
//Array
var pets = ['cat', 'dog', 'pig'];
var petstwo = ['lion', 'dragon', 'lizard'];
//Object
var wizard = {
    a: 'David',
    age: '22',
    city: 'Tegucigalpa'
};
//null and undefined
var met = undefined;
var noo = null;
//Tuple
var basket;
basket = ['basketball', 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// Any - !!!!!!!!!!!!!!!!!!!!! BE CAREFUL !!!!!!!!!!!!!!!!!!
var whatever = 'aghhhhh nooooooo!!!!';
whatever: 5;
//void 
var sing = function () {
    console.log('lalalaala');
};
//never 
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('Fight');
};
var dog = {};
dog.count;
// function 
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robots) {
    console.log('Fight');
    return 5;
};
// classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAWWWWWR');
console.log(lion.greet());
// Union
var confused = true;
