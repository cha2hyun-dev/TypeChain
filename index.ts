const name ="Nicolas",
    age = 24,
    gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`hello ${name} ${age} ${gender}`);
}

sayHi(name, age, gender);

export {};
