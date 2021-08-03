// importing the interface

import {format_msg} from '../interfaces/format_msg.js'

// implementing the interface with the class
// since interface has this method called displayMsg, it's mandatory to have this method in the class now


export class user_scope implements format_msg{
    // defining class properties
    name : string;
    age : number;
    address : string;
    // defining class constructor to initizlize the properties
    constructor(n :string , a:number , ad : string) {
        this.name = n;
        this.age = a;
        this.address = ad;
    }
    // defining method on the class to perform operations on attributes.
    displayMsg() {
        console.log(`${this.name} is ${this.age} years old and living at address ${this.address}`);
    }

}