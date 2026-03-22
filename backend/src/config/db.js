import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("connected to Database"));
  } catch (error) {
    console.error("Error connecting to DB");
  }
};
