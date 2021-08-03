// importing the interface
// implementing the interface with the class
// since interface has this method called displayMsg, it's mandatory to have this method in the class now
export class user_scope {
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
