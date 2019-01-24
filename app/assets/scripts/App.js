var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $100 in taxes.");
    }
}

alert("Testing 5435356");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Doe", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();

