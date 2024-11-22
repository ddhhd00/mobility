const mongoose = require("mongoose");

// MongoDB 연결 함수
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // 오류 발생 시 종료
  }
};

module.exports = connectDB;
