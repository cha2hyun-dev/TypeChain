const name ="Nicolas",
    age = 24,
    gender = "male";

const sayHi = (name:string, age:number, gender:string):void => {
    console.log(`hello ${name} ${age} ${gender}`);
}

sayHi(name, 44, gender);

export {};
