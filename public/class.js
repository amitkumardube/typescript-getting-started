"use strict";
// defining the class
var user = /** @class */ (function () {
    // defining class constructor to initizlize the properties
    function user(n, a, ad) {
        this.name = n;
        this.age = a;
        this.address = ad;
    }
    // defining method on the class to perform operations on attributes.
    user.prototype.displayMsg = function () {
        console.log(this.name + " is " + this.age + " years old and living at address " + this.address);
    };
    return user;
}());
// creating instance of the class. We created 3 instance of same  class.
var kshitiz = new user('kshitiz', 8, 'romania');
var sonam = new user('sonam', 15, 'romania');
var amit = new user('amit', 99, 'romania');
console.log(kshitiz, sonam, amit);
// modifying class properties values
sonam.age = 11;
amit.age = 100;
// creating array of class type
var users = [];
users.push(amit);
users.push(sonam);
users.push(kshitiz);
// looping through the array to display all the values
users.forEach(function (user) {
    console.log(user.name, user.age, user.address);
});
