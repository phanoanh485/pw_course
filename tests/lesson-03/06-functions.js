//Bài 1
function multiply(a, b){
    tich = a*b;
    console.log(`Tích ${a} và ${b} là: ${tich}`)
}
multiply(3,6);
multiply(5,8);

//Bài 2
function findMin(a, b, c){
    let arr = [a, b, c];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
    }
    console.log(`Số nhỏ nhất là ${min}`);
}

findMin(5,8,3);
findMin(2,6,34);
findMin(4,4,7);
findMin(2,2,2);

//Bài 3
function getTopStudents (students, threshold){
    topStudents = [];
    for (let i = 0; i < students.length; i++){
        if (students[i].score >= threshold){
            topStudents.push(students[i].name)
        }
    }
    console.log(topStudents);
}

const classList = [
    { name: "An", score: 8.5 },
    { name: "Bình", score: 4.0 },
    { name: "Cường", score: 9.0 },
    { name: "Duy", score: 7.0 }
];

getTopStudents(classList,7);
getTopStudents(classList,8);

//Bài 4
function calculateInterest (principal, rate, years){
    total = principal + principal*rate*years/100;
    console.log(total);
}

calculateInterest(10000000, 5, 4);