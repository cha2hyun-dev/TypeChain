interface Human {
    name : string,
    age : number,
    gender : string
}

const person = {
    name : "soohyun",
    age : 22,
    gender : "male"
};

const sayHi = (person : Human):string => {
    return `hello ${person.name} ${person.age} ${person.gender}!`;
}

console.log(sayHi(person));

export {};
