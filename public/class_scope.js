"use strict";
// defining the class
var user_scope = /** @class */ (function () {
    // defining class constructor to initizlize the properties
    function user_scope(n, a, ad) {
        this.name = n;
        this.age = a;
        this.address = ad;
    }
    // defining method on the class to perform operations on attributes.
    // although age is private it can be accessed inside the class as below.
    user_scope.prototype.displayMsg = function () {
        console.log(this.name + " is " + this.age + " years old and living at address " + this.address);
    };
    return user_scope;
}());
// creating instance of the class. We created 3 instance of same  class.
var kshitiz_scope = new user_scope('kshitiz', 8, 'romania');
var sonam_scope = new user_scope('sonam', 15, 'romania');
var amit_scope = new user_scope('amit', 99, 'romania');
console.log(kshitiz_scope, sonam_scope, amit_scope);
// Modifying class properties values
// Since age is private now it's value can't be changed or accessed from outside of the class.
//sonam.age = 11;
//amit.age = 100;
// creating array of class type
var users_scope = [];
users_scope.push(amit_scope);
users_scope.push(sonam_scope);
users_scope.push(kshitiz_scope);
// looping through the array to display all the values
users_scope.forEach(function (user) {
    // age can't be accessed outside the class
    //console.log(user.name, user.age , user.address);
    console.log(user.name, user.address);
    user.displayMsg();
});
