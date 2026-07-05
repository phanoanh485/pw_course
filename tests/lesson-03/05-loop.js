const { randomInt } = require("node:crypto");

//Bài 1
let tong = 0
for (let i = 1; i <= 100; i++){
    tong += i;
}
console.log(`Tổng từ 1 đến 100 là: ${tong}`);

//Bài 2
for (let i = 2; i <= 9; i++){
    console.log(`Bảng cửu chương ${i} là :`)
    for ( let j = 2; j <= 9; j++) {
        let tich = i*j;
        console.log(`${i}x${j}=${tich}`);
    }
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
    console.log(`${user[i-1]}${i}@gmail.com`)
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