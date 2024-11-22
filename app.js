const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// 환경 변수 설정
dotenv.config();

// MongoDB 연결
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 라우트 설정
app.use("/vehicles", require("./routes/vehicles"));
app.use("/reservations", require("./routes/reservations"));

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Welcome to AutoTaxi API!");
});

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
