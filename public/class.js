"use strict";
// defining the class
class user {
    // defining class constructor to initizlize the properties
    constructor(n, a, ad) {
        this.name = n;
        this.age = a;
        this.address = ad;
    }
    // defining method on the class to perform operations on attributes.
    displayMsg() {
        console.log(`${this.name} is ${this.age} years old and living at address ${this.address}`);
    }
}
// creating instance of the class. We created 3 instance of same  class.
let kshitiz = new user('kshitiz', 8, 'romania');
let sonam = new user('sonam', 15, 'romania');
let amit = new user('amit', 99, 'romania');
console.log(kshitiz, sonam, amit);
// modifying class properties values
sonam.age = 11;
amit.age = 100;
// creating array of class type
let users = [];
users.push(amit);
users.push(sonam);
users.push(kshitiz);
// looping through the array to display all the values
users.forEach(user => {
    console.log(user.name, user.age, user.address);
});
//# sourceMappingURL=class.js.map