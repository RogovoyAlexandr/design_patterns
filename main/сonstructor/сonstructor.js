/**
 *  Simple
 */
// function Car(model, year, miles) {
//     this.model = model;
//     this.year = year;
//     this.miles = miles;
//
//     this.toString = function () {
//         return this.model + ' has done ' + this.miles + ' miles.'
//     }
// }


/**
 *  Prototype
 */
// function Car(model, year, miles) {
//     this.model = model;
//     this.year = year;
//     this.miles = miles;
// }
//
// Car.prototype.toString = function () {
//     return this.model + ' has done ' + this.miles + ' miles.'
// };


/**
 *  ES6
 */
class Car {

    _model;
    _year;
    _miles;

    constructor(model, year, miles) {
        this._model = model;
        this._year = year;
        this._miles = miles;
    }

    toString() {
        return this._model + ' has done ' + this._miles + ' miles.'
    }
}


let civic = new Car('Honda Civic', 2009, 20000);
let mazda = new Car('Mazda', 2015, 220000);

console.log(civic, mazda);