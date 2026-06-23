const { randomInt } = require("node:crypto");

//Bài 1
let n = 100;
let tong = n*(n+1)/2;
console.log(`Tổng từ 1 đến 100 là: ${tong}`);

//Bài 2
for (let i = 2; i <= 9; i++){
    let tich = i*2;
    console.log(`2x${i}= ${tich}`)
}

//Bài 3
let soLe = [];
for (let i = 1; i <=99; i++) {
    if (i%2 !==0) {
        soLe.push(i)
    }
}

console.log(soLe);

//Bài 4
for (let i = 1; i <=10; i++){
    const user = ["hien", "ha", "nga", "nhi", "thao", "ngoc", "hung", "manh", "lanh", "nguyen"]
    console.log(`${user[i-1]}${i}gmail.com`)
}

//Bai 5
let doanhThu = [];
for (i = 1; i <= 12; i++){
    let newDoanhThu = {"month": i, "total": randomInt(100,150)};
    doanhThu.push(newDoanhThu)
}
console.log(doanhThu);

let tongDoanhThu = 0;
for (let doanhThuThang of doanhThu) {
    tongDoanhThu += doanhThuThang.total
}
console.log(`Tổng doanh thu là: ${tongDoanhThu}`);