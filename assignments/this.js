/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: Whenever a function is contained in the global scope, the value of this inside of that function will be the window object. 
* 2. Implicit binding: Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. explicit binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
function Cars(type) 
{
    this.type = type;
}

Cars.prototype.repo = function()
{
    console.log(this.type);
}

ford = new Cars('ford');
ford.repo();
// Principle 3

// code example for New Binding

bike = new Cars('bike')
ford.repo();
bike.repo();


// Principle 4

// code example for Explicit Binding

drives = function () {
    console.log(`the ${this.type} drives down the street.`)
}

drives.call(ford)
drives.call(bike)