短網址產生器
=
![](https://github.com/dandywhy/auth-login/blob/main/public/img/%E7%99%BB%E5%85%A5%E9%A0%81.jpg)


介紹
-
登入器



環境建置
-
+ [Node.js](https://nodejs.org/en/)
+ [Express](https://expressjs.com/zh-tw/)
+ [Express-handlebars](https://www.npmjs.com/package/express-handlebars)
+ [Express-session](https://www.npmjs.com/package/express-session)
+ [cookie-parser](https://www.npmjs.com/package/cookie-parser)
+ [Mongoose](https://mongoosejs.com/)

開始使用
-
1. 先確認是否已安裝 [Node.js](https://nodejs.org/en/).

2. 開啟終端機，將專案 clone 到本地：
 ```bash 
 git clone https://github.com/dandywhy/auth-login
 ```
3. 將路徑改到此專案資料夾：
 ```bash 
 cd auth-login
 ```
4. 安裝 Npm 套件：
 ```bash 
 npm install
 ```
5. 將預設使用者放進資料庫 ：
```bash
npm run seed
```
6. 打開伺服器 :
 ```bash
 npm run dev
 ```
7. 當終端機出現以下文字，代表伺服器成功啟動：
 ```bash 
 App is running on http://localhost:3000
 ```
8. 欲停止伺服器，請在終端機按 ctrl + c
