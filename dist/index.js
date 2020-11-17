"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("lynn", 20, "female");
const sayHi = (person) => {
    return `hello ${person.name} ${person.age} ${person.gender}!`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map