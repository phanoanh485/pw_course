// Bài 1
let car = {
    make : "Toyota",
    model : "Corolla",
    year : "2021"
}

console.log(car.year);

//Bài 2
let person = {
    name : "Oanh",
    address : {
        street: "Trân Hưng Đạo",
        city: "Hà Nội",
        country: "Việt Nam"
    }
}

//Bài 3
console.log(person.address.street);

let student = {
    name: "Hân",
    grades: {
        math: 7,
        english: 9
    }
}

console.log(student["grades"]["math"]);

//Bài 4
let settings = {
    volume: 5,
    brightness: 15 
}

settings.volume = 4;
console.log(settings.volume);

//Bài 5
let bike = {
    name : "Honda"
}

bike.color = "Red";
console.log(bike);

//Bài 6
let employee = {
    name : "Hà",
    age : 30,
}

delete employee.age;
console.log(employee);

//Bài 7
const school = {
    classA : ["An", "Bình", "Châu"],
    classB : ["Đào", "Hương", "Giang"]
}
console.log(school);