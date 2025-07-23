import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// لحساب المسار الصحيح لملف .env داخل مجلد backend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// تحميل ملف .env يدويًا من مجلد backend
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const connectDB = async () => {
  try {
    console.log("🔍 MONGO_URI is:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDb connection error:", error);
  }
};

export default connectDB;
