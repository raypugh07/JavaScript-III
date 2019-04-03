/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of this is the window object.
* 2. The value of this is the object before the precending dot of the function.
* 3. The value of this is the specific object that is created and returned by the contructor function.
* 4. The value of this is this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greetMom(name){

    console.log('Hello '+ name);
    console.log(this);

}

greetMom('Mother');

// Principle 2

// code example for Implicit Binding
let greetMom={

    greeting: 'Hello ',
    speak: function(name){

        console.log(this.greeting+name);
        console.log(this);

    }

}

greetMom.speak('Mother');

// Principle 3

// code example for New Binding
function greetMom(name) {

    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {

        console.log(this.greeting + this.name);
        console.log(this);

    }

};
const greetSon= new greetMom('Son');
const greetDad= new greetMom ('Dad')

greetSon.speak();
greetDad.speak();

// Principle 4

// code example for Explicit Binding
greetSon.speak.call(greetDad);
greetDad.speak.apply(greetSon);
