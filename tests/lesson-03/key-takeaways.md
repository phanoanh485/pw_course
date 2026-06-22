# 1. Git
## 1.1 Undo things
### 1.1.1 Git restore
- **Chức năng:** Dùng để đưa các file đã add lên vùng Staging(S) quay trở về vùng Working directory (Wd)
- **Cách dùng:**
  + Dùng cho từng file: `git restore --staged <filename>`
  + Tất cả các file: `git restore --staged.`

### 1.1.2 Git reset
- **Chức năng:** Dùng để hủy các commit trước đó.
- **Cách dùng:**
  + Reset 1 commit: `git reset HEAD~1`
  + Reset N commit: `git reset HEAD~N`
- Lưu ý:
  + Commit đầu tiên không thể reset.
  + Nếu muốn reset -> xóa thư mục .git đi rồi init lại

### 1.1.3 Change commit message
- **Chức năng:** Dùng để chỉnh sửa message của các commint.
- **Câu lệnh:** `git commit --amend -m "message"`

## 1.2 Brandching
- Pull code từ sever về:
  `git pull origin main`
- Cấu hình nhánh mặc định:
  `git config --global init.defaulBrach main`
- Xem danh sách nhánh:
  `git branch`
- Tạo nhánh mới:
  `git branch <ten_branch>`
- Chuyển sang nhánh mới:
  `git checkout <ten_branch>`
- Vừa tạo, vừa chuyển sang nhánh mới:
  `git checkout -b <tên>`
- Xóa branch: 
  `git branch -D <tên nhánh>`
  + Lưu ý: chỉ xóa được khi đứng ở nhánh khác

## 1.3 Ignore file
- File **.gitignore** là file cầu hình giúp chỉ định những file và thư mục sẽ không được theo dõi bởi Git.
- Cú pháp file .gitignore
  + Comment: bắt đầu bằng #
  + Ignore file cụ thể: "tên file"
  + Ignore tất cả file có extension .log: *.log
  + Ignore thư mục: "tên thư mục/"
  + Ignore file trong thư mục con: **/*.tmp
  + Ngoại lệ - KHÔNG ignore file này dùng !
  + Ignore file chỉ ở thư mục gốc: "/tên file"
  + Ignore tất cả các file .txt trong thư mục doc/: doc/**/*.txt

# 2. Javascript
## 2.1 Convention
- Một số loại convention phổ biến:
  + snake_case
  + kebab-case: dùng đặt tên file và folder
  + camelCase: đặt tên biến, hàm
  + PascalCase: đặt tên class
## 2.2 Dùng consolo.log nâng cao
- Giúp debug và theo dõi code
## 2.3 Object
- Tập hợp các giá trị cùng một biến hoặc hằng số.
- Khai báo:
``` 
const/let <variable_name> = {
  key1 : value1,
  key2 : value2,
  ...
  }
```
- Sử dụng:
`<variable_name>.<key>`
hoặc
`<variable_name>["<key>"]`
## 2.4 Array
- Tạo mảng:
  + Khai báo:
  ` const <tên mảng> = [p1,p2,...,pn];`
  + Sử dụng:
  `<tên mảng>[index]`
  + Độ dài mảng: `<tên mảng>.length`
## 2.5 Function
- Đoạn code được đặt tên có tthere tái sử dụng được, thực hiện một nhiều vụ hoặc tính toán.
- Khai báo
``` function <nameFunction>() {
  // code
}```
