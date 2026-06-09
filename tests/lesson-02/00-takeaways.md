# 1. Verson control system
## Định nghĩa và ưu diểm
 Hệ thông quản lý phiên bản
Ưu diểm:
+ Giúp dễ dàng xem lại các lịch sử thay đổi
+ Quay trở lại bảng thay đổi trước đó
## 3 loại Version Control System
+ Local: trên máy cá nhân
+ Centralize: 1 máy chủ tập trung
+ Distributed: nhiều máy khác nhau
**Loại phổ biến nhất là: Distributed**

# 2. Git
Cha đẻ của Git là Linux Torvalds. Git được sinh ra chỉ trong vài tuần
## Ưu diểm của Git
- Tính năng: Dễ dùng, có thể branching, tốc độ sử lý nhanh
- Được free
- Nhiều công ty sử dụng
## Git & GitHub
|Git|GitHub|
|---|------|
|Phần mềm|Dịch vụ web|
|Cái trên máy tính|Host trên website|
|Là command line tool| Là công cụ có giao diện|
|Công cụ quản lý phiên bản, đưa file vào Git repository|Nơi để upload Git repository lên|
|Có các tính năng của Version Control System|Có các tính năng của Version Control System + một số tính năng khác (VD: GitHub Actions, GitHub Co-pilot)|
## Git - three states
 Khởi tạo repo local: `git init`
 
 Liên kết với GitHub `git remort add origin <url>`

- Working Directory: Các file mới hoặc file có thay đổi (lần đầu tiên khỏi tạo repo thì tất cả các file sẽ được ở vùng này)

Để chuyển từ vùng Working Directory sang vùng Staging Area thì dùng lệnh `git add + tên file`

- Staging Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)

Staging Area -> Repository: `git commit -m "Loại: note thông tin phiên bản"`
- Repository: Các commit (phiên bản)

Push code lên GitHub: `git push origin main`


## Cấu hình
- Cấu hình dung chung cho toàn bộ các repo trong máy tính:

`$git config --global user.name "Tên bạn"`
`$git config --global user.emali "email của bạn"`
- Cấu hình dùng cho từng repo theo từng user: bỏ "--global".
## Một số câu lệnh
Xem trạng thái file `git status`
Kiểm tra danh sách commit `git log`
## Commit convertion
Convertion = Quy tắc
- Tùy theo từng team mà sẽ có những quy tắc khác nhau

**Gợi ý:** type : short_description
+ Tpye:
 + chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới
 + feat: thêm tính năng mới, test case mới
 + fix: sửa lỗi 1 test trước đó
+ short_description: mô tả ngắn ngọn (50 ký tự)

# 3. JavaScript basic
+ Phổ biến nhiều người dùng.
+ Giúp browser hoạt động.
+ JavaScript chạy được do browser engine support -> vì không có browser engine nên sủ dụng công cụ khác (hiện tại đang dùng là NodeJS)

Để run code gõ lệnh `node + tên file` trong teminal
+ In ra màn hình
`console.log()`
+ Comment 
`// trước dòng code muốn comment`
  + Có thể dùng comment để "vô hiệu hóa tạm thời một đoạn code.
  + Comment nhiều dòng thêm /* vào trước dòng đầu tiền và */ sau dòng cuối cùng
+ Biến:
  + Khai báo biến: \<từ khóa\> \<tên biến\> = \<giá trị\>
  + Từ khóa:
    + var: cho phép khai báo lại, có ơhamj vi global
    + let: không cho phép khai áo lại, trong phạm vi block (phần code trong { })
+ Hằng: dùng để khai báo các giá trị không có nhu cầu thay đổi, chỉ dùng một lần
  + Khai báo: const \<tên hằng\> = \<giá trị\>
+ Data Type: để biết kiểu dữ liệu của một biến sử dụng hàm `typeof <variable>`
  + Kiều dữ liệu nguyên thủy (primitive types):
    + Number: số nguyên và số thực
    + String:chuỗi ký tự 
    + Boolean: Giá trị logic
    + Undefined
    + Null
    + Symbol
    + BigInt
  + Kiề tham chiếu (refercence types)
    + Object
+ Toán tử so sánh: dùng để so sánh 2 hạng, trả về kết quả boolean
  + So sánh bằng 
    + == : bỏ qua kiểu dữ liệu so sánh cùng giá trị
    + === : so sánh kiểu dữ liệu trước rồi mới so sánh giá trị
  + So sánh không bằng: 
    + != bỏ qua kiểu dữ liệu chỉ so sánh giá trị
    + !== so sánh kiểu dữ liệu trước khi so sánh giá trị
  + So sánh lớn hơn, nhỏ hơn: >,<, <=, >=
+ Toán tử logic
  + && (AND): trả về đúng nếu cả 2 vế đều đúng
  + !! (OR): trả về đugns nếu 1 trong 2 đúng
+ Toán tử một ngôi
  + Prefix: toán tử nằm ở phái trước - tăng trước, trả về sau
    + ++x;
    + --x;
  + Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
    + x++;
    + x--;
+ Toán tử toán học: +, -, *, /
+ Câu điều kiện: kiểm tra một đoạn loigc trước, nếu đúng mới chạy phía sau
  + if
  + if...else
  + if...else if...else
  + swich...case
+ Vòng lặp: dùng để lặp lại một đoạn logic
  + for (i)
  + for (of)
  + for (each)
  + for (in)
  + white
  + do_white
